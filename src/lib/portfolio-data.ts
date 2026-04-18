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
  role: "Data Analyst · 1 Years Experience",
  tagline:
    "Turning complex datasets into clear business decisions. Specialized in revenue analytics, customer behaviour, and ML-driven forecasting.",
  location: "India",
  email: "sheetlaverma71@gmail.com",
  github: "https://github.com/sheetlaverma",
  linkedin: "https://www.linkedin.com/in/sheetla-verma",
  instagram: "https://www.instagram.com/atharv_a6/",
  repository: "https://github.com/sheetlaverma/Sheetla-portfolio.git",
  about: [
    "I am a data analyst with 1 years of experience helping B2B and B2C companies unlock value from their data. I have worked across e-commerce, fintech, and healthcare domains, building end-to-end pipelines from raw data collection to executive dashboards.",
    "My core strength lies in asking the right business question before touching any data. I combine statistical rigour with storytelling, whether presenting to a C-suite or collaborating with an engineering team.",
    "I have independently reduced customer churn by 22%, improved forecast accuracy by 18%, and built self-serve dashboards used daily by 200+ stakeholders.",
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
    title: "Customer Churn Prediction - Telecom",
    category: "High impact",
    impact:
      "Reduced monthly churn by 22%, saving approximately INR 1.2 Cr annually.",
    summary:
      "Built an end-to-end ML pipeline to predict churn 30 days in advance using 2M+ customer records. XGBoost model achieved 91% AUC and triggered CRM interventions.",
    stack: ["Python", "XGBoost", "SQL", "Flask", "Tableau"],
    liveUrl: "#",
    repoUrl: "https://github.com/sheetlaverma/Sheetla-portfolio",
  },
  {
    title: "Sales Forecasting Dashboard - FMCG",
    category: "High impact",
    impact:
      "Improved forecast accuracy from 64% to 82% and reduced overstock by INR 80L per quarter.",
    summary:
      "Designed a real-time Power BI dashboard pulling from five data sources via automated ETL, with Prophet-based 13-week demand forecasting.",
    stack: ["Power BI", "Python (Prophet)", "BigQuery", "Airflow"],
    liveUrl: "#",
    repoUrl: "https://github.com/sheetlaverma",
  },
  {
    title: "A/B Test Framework - E-commerce Checkout",
    category: "High impact",
    impact:
      "Improved conversion rate by 11.4% and reduced cart abandonment by 17%.",
    summary:
      "Designed a statistically rigorous A/B framework and ran 14 sequential experiments across six months to optimize the checkout funnel.",
    stack: ["Python", "SQL", "Statistics", "Mixpanel", "Looker"],
    liveUrl: "#",
    repoUrl: "https://github.com/sheetlaverma",
  },
  {
    title: "Patient Readmission Risk - Healthcare",
    category: "Research grade",
    impact: "Adopted by clinical teams to flag high-risk discharge cases.",
    summary:
      "Analysed 500K+ patient records using logistic regression and SHAP for interpretability. Published methodology as internal white paper.",
    stack: ["Python", "SHAP", "Scikit-learn", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "https://github.com/sheetlaverma",
  },
  {
    title: "RFM Customer Segmentation - Retail",
    category: "Strategy impact",
    impact:
      "Increased email open rate by 34% and repeat purchase rate by 19% within 90 days.",
    summary:
      "Segmented 800K customers into seven behavioural clusters using RFM scoring and K-Means clustering for campaign personalization.",
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
