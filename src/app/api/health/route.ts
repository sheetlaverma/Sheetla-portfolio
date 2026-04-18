import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    status: "ok",
    service: "sheetla-portfolio",
    timestamp: new Date().toISOString(),
  });
}
