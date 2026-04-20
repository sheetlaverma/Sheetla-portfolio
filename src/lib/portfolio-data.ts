export type Skill = {
  name: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  title: string;
  category: string;
  impact: string;
  summary: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export const profile = {
  name: "Sheetla Verma",
  role: "Data Analyst / Builder / Storyteller",
  tagline:
    "I blend DESIGN thinking, clean CODE, and sharp analytics to create products and dashboards that people actually use.",
  location: "India",
  email: "sheetlaverma71@gmail.com",
  github: "https://github.com/sheetlaverma",
  linkedin: "https://www.linkedin.com/in/sheetla-verma",
  instagram: "https://www.instagram.com/atharv_a6/",
  repository: "https://github.com/sheetlaverma/Sheetla-portfolio.git",
  about: [
    "I work at the intersection of business clarity and technical execution. From raw event logs to executive-ready insights, I build end-to-end systems that turn data into decisions.",
    "My process is simple: frame the right question, build the cleanest pipeline possible, and ship outputs that teams can trust without second guessing.",
    "Across telecom, retail, and healthcare projects, my work has reduced churn by 22%, improved forecast accuracy by 18%, and supported 200+ daily dashboard users.",
  ],
};

export const skills: Skill[] = [
  { name: "Python" },
  { name: "SQL" },
  { name: "Power BI" },
  { name: "Machine Learning" },
];

export const metrics: Metric[] = [
  { value: "1+", label: "Years experience" },
  { value: "12", label: "Projects shipped" },
  { value: "22%", label: "Churn reduced" },
  { value: "3", label: "Domains covered" },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      "Python (Pandas, NumPy, Scikit-learn)",
      "SQL (PostgreSQL, BigQuery, MySQL)",
      "R (ggplot2, dplyr)",
    ],
  },
  {
    category: "Visualisation",
    items: [
      "Power BI (DAX, RLS)",
      "Tableau (LOD, Calculated fields)",
      "Matplotlib, Seaborn, Plotly",
    ],
  },
  {
    category: "Machine Learning",
    items: [
      "Regression & Classification",
      "Time Series (ARIMA, Prophet)",
      "Clustering (K-Means, DBSCAN)",
    ],
  },
  {
    category: "Data Engineering",
    items: [
      "ETL pipelines (Airflow, dbt)",
      "Cloud (AWS S3, GCP BigQuery)",
      "Git, Docker basics",
    ],
  },
  {
    category: "Statistics & Analytics",
    items: [
      "A/B Testing & Hypothesis Testing",
      "Cohort & Funnel Analysis",
      "RFM Segmentation",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Executive storytelling",
      "Cross-functional collaboration",
      "Problem framing & scoping",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Churn Radar / Telecom",
    category: "Flagship Build",
    impact:
      "Cut monthly churn by 22% and protected roughly INR 1.2 Cr in annual revenue.",
    summary:
      "Shipped a full churn prediction engine on 2M+ customer records, surfacing risk 30 days early. The XGBoost stack hit 91% AUC and plugged directly into CRM outreach workflows.",
    stack: ["Python", "XGBoost", "SQL", "Flask", "Tableau"],
    liveUrl: "#",
    repoUrl: "https://github.com/sheetlaverma/Sheetla-portfolio",
  },
  {
    title: "Forecast OS / FMCG",
    category: "Flagship Build",
    impact:
      "Moved forecast accuracy from 64% to 82% and reduced overstock by about INR 80L per quarter.",
    summary:
      "Built a live Power BI command center fed by automated ETL from five sources, then layered a Prophet model for rolling 13-week demand planning.",
    stack: ["Power BI", "Python (Prophet)", "BigQuery", "Airflow"],
    liveUrl: "#",
    repoUrl: "https://github.com/sheetlaverma",
  },
  {
    title: "Checkout Experiment Engine",
    category: "Growth System",
    impact:
      "Lifted conversion by 11.4% while reducing cart abandonment by 17%.",
    summary:
      "Designed and operationalized an A/B framework, then ran 14 iterative experiments over six months to reshape the checkout funnel with statistical confidence.",
    stack: ["Python", "SQL", "Statistics", "Mixpanel", "Looker"],
    liveUrl: "#",
    repoUrl: "https://github.com/sheetlaverma",
  },
  {
    title: "Readmission Risk Lens / Healthcare",
    category: "Research Build",
    impact: "Adopted by clinical teams to flag high-risk discharge cases.",
    summary:
      "Analyzed 500K+ patient records with interpretable modeling (logistic regression + SHAP), then documented the method as an internal clinical playbook.",
    stack: ["Python", "SHAP", "Scikit-learn", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "https://github.com/sheetlaverma",
  },
  {
    title: "RFM Segmentation Studio / Retail",
    category: "Strategy Build",
    impact:
      "Increased email open rate by 34% and repeat purchases by 19% within 90 days.",
    summary:
      "Segmented 800K users into seven high-signal behavioral cohorts using RFM + K-Means, enabling personalized lifecycle campaigns that performed fast.",
    stack: ["Python", "K-Means", "SQL", "Power BI"],
    liveUrl: "#",
    repoUrl: "https://github.com/sheetlaverma",
  },
];

export const certifications: Certification[] = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    year: "2022",
  },
  {
    title: "Microsoft Power BI Data Analyst (PL-300)",
    issuer: "Microsoft",
    year: "2023",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    title: "Applied Data Science with Python Specialisation",
    issuer: "University of Michigan / Coursera",
    year: "2021",
  },
];
