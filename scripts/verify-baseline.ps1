param(
  [string]$Baseline = "d2eb841",
  [switch]$IgnoreWorkingTree
)

$ErrorActionPreference = "Stop"

function Fail([string]$Message) {
  Write-Host "FAIL: $Message" -ForegroundColor Red
  exit 1
}

function Pass([string]$Message) {
  Write-Host "PASS: $Message" -ForegroundColor Green
  exit 0
}

$insideRepo = git rev-parse --is-inside-work-tree 2>$null
if ($LASTEXITCODE -ne 0 -or $insideRepo -ne "true") {
  Fail "Current directory is not a git repository."
}

git rev-parse --verify "$Baseline^{commit}" *> $null
if ($LASTEXITCODE -ne 0) {
  Fail "Baseline commit '$Baseline' was not found."
}

$baselineDiff = git diff --name-status "$Baseline..HEAD"
$workingTree = git status --porcelain
$currentHead = git rev-parse --short HEAD
$baselineHead = git rev-parse --short $Baseline

$hasBaselineDiff = -not [string]::IsNullOrWhiteSpace($baselineDiff)
$hasWorkingTreeChanges = -not [string]::IsNullOrWhiteSpace($workingTree)

if (-not $hasBaselineDiff -and ($IgnoreWorkingTree -or -not $hasWorkingTreeChanges)) {
  if ($IgnoreWorkingTree) {
    Pass "Repository matches baseline ($baselineHead). Working tree check was skipped. Current HEAD: $currentHead"
  }

  Pass "Repository matches baseline ($baselineHead) and working tree is clean. Current HEAD: $currentHead"
}

Write-Host "Baseline commit: $baselineHead"
Write-Host "Current HEAD:   $currentHead"

if ($hasBaselineDiff) {
  Write-Host ""
  Write-Host "Files different from baseline:" -ForegroundColor Yellow
  Write-Host $baselineDiff
}

if ($hasWorkingTreeChanges -and -not $IgnoreWorkingTree) {
  Write-Host ""
  Write-Host "Uncommitted changes:" -ForegroundColor Yellow
  Write-Host $workingTree
}

Fail "Repository does not fully match baseline state."
