import type { Project, Skill, ExperienceItem, Certification, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Kodurupaka KumaraAnurag',
  title: 'Junior Data Analyst',
  subtitle: 'Junior Data Analyst at Vangrove Tech | B.Tech CSE (AI & ML) | Python, SQL, Excel, Power BI & EDA',
  bio: 'Results-driven Junior Data Analyst with a B.Tech in Computer Science Engineering (AI & ML) and hands-on experience in SQL, Python, Excel, Power BI, and exploratory data analysis. Proven track record of transforming raw data into actionable dashboards, automating data-cleaning pipelines to improve accuracy by 25%, and writing optimized queries to accelerate reporting workflows across cross-functional teams.',
  location: 'Hyderabad, Telangana',
  phone: '+91 9502795929',
  email: 'kodurupakakumaraanurag@gmail.com',
  github: 'https://github.com/kodurupakakumaraanurag-png',
  linkedin: 'https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302',
  status: 'Junior Data Analyst @ Vangrove Tech | Open for Data Analyst & AI/ML Roles',
  education: {
    institution: 'Malla Reddy Institute of Technology and Science',
    degree: 'Bachelor of Technology in Computer Science Engineering (AI & ML)',
    location: 'Hyderabad, India',
    period: '2022 – 2026'
  },
  stats: [
    { value: 'June 2026-Present', label: 'Junior Data Analyst' },
    { value: '30%', label: 'Turnaround Time Cut' },
    { value: '35%', label: 'Query Execution Boost' },
    { value: '40%', label: 'Stakeholder KPI Visibility' }
  ]
};

export const SKILLS: Skill[] = [
  // Programming & Analytics
  { name: 'Python', category: 'Programming & Analytics', level: 95, experienceYears: 'Core', iconName: 'FileCode2', description: 'Data Analysis, Scripting, Automation Pipelines', highlight: true },
  { name: 'SQL (MySQL, SQLite)', category: 'Programming & Analytics', level: 92, experienceYears: 'Core', iconName: 'Database', description: 'SQL Joins, Subqueries, Aggregations, GROUP BY, Indexing, Query Optimization', highlight: true },
  { name: 'Pandas & NumPy', category: 'Programming & Analytics', level: 94, experienceYears: 'Core', iconName: 'DatabaseZap', description: 'Data Cleaning, Data Validation, Exploratory Data Analysis (EDA)', highlight: true },
  { name: 'Data Cleaning & Validation', category: 'Programming & Analytics', level: 95, experienceYears: 'Core', iconName: 'Zap', description: 'Eliminating missing values, schema inconsistencies, & duplicate records', highlight: true },
  { name: 'Exploratory Data Analysis (EDA)', category: 'Programming & Analytics', level: 92, experienceYears: 'Core', iconName: 'Binary', description: 'Uncovering operational trends, demand patterns, and demand forecasting', highlight: true },

  // Data Visualization & BI
  { name: 'Advanced Excel', category: 'Data Visualization & BI', level: 96, experienceYears: 'Core', iconName: 'Palette', description: 'VLOOKUP, XLOOKUP, Pivot Tables, Pivot Charts, Slicers, KPI Reporting, Executive Dashboards', highlight: true },
  { name: 'Power BI', category: 'Data Visualization & BI', level: 88, experienceYears: 'Core', iconName: 'Layers', description: 'Interactive Business Reporting, Dashboard Development, Data Modeling', highlight: true },
  { name: 'Matplotlib', category: 'Data Visualization & BI', level: 90, experienceYears: 'Core', iconName: 'Palette', description: 'Statistical Visualizations, Summary KPI Reports, Workforce Distribution Metrics' },

  // Databases & SQL
  { name: 'MySQL & SQLite', category: 'Databases & SQL', level: 92, experienceYears: 'Hands-on', iconName: 'Database', description: 'Multi-table joins, subqueries, aggregations, indexing, and performance tuning' },

  // Statistical & Predictive Methods
  { name: 'Statistical Methods', category: 'Machine Learning & Tools', level: 86, experienceYears: 'Hands-on', iconName: 'Bot', description: 'Descriptive Statistics, Trend Analysis, Correlation Analysis, Predictive Modeling', highlight: true },

  // Developer Tools
  { name: 'Git, GitHub & VS Code', category: 'Machine Learning & Tools', level: 90, experienceYears: 'Hands-on', iconName: 'Workflow', description: 'Version control, collaborative workflows, and IDE project execution' }
];

export const PROJECTS: Project[] = [
  {
    id: 'retail-sales-dashboard',
    title: 'Retail Sales Dashboard',
    tagline: 'Microsoft Excel — Advanced Formulas — Pivot Charts — Slicers',
    description: 'Developed an end-to-end interactive retail sales analytics dashboard by cleaning and structuring 15,000+ transactional records for cross-category performance analysis.',
    fullDescription: 'Developed an end-to-end interactive retail sales analytics dashboard by cleaning and structuring 15,000+ transactional records for cross-category performance analysis. Streamlined business decision-making by 30% through dynamic KPI tracking and multidimensional slicers evaluating revenue by product, category, and region.',
    category: 'Excel & Dashboards',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['Microsoft Excel', 'Advanced Formulas', 'Pivot Charts', 'Slicers', 'VLOOKUP / XLOOKUP', 'KPI Tracking'],
    metrics: ['📊 15,000+ Transactional Records', '📈 30% Decision-Making Streamline', '💡 Multidimensional Slicers & KPI Tracking'],
    githubUrl: 'https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302',
    liveUrl: 'https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302',
    featured: true,
    architecture: [
      'Data Cleaning & Structuring: Cleaned and structured 15,000+ raw transactional records for cross-category performance analysis.',
      'KPI & Revenue Evaluation: Created dynamic KPI tracking evaluating revenue by product, category, and region.',
      'Interactive Dashboard: Built multidimensional Excel slicers and advanced chart models to streamline business decision-making by 30%.'
    ]
  },
  {
    id: 'ai-dynamic-pricing',
    title: 'AI-Powered Dynamic Pricing & Demand Forecasting',
    tagline: 'Python — Pandas — NumPy — Excel',
    description: 'Analyzed historical sales and demand datasets to quantify pricing elasticity and identify revenue optimization opportunities across diverse product lines.',
    fullDescription: 'Analyzed historical sales and demand datasets to quantify pricing elasticity and identify revenue optimization opportunities across diverse product lines. Preprocessed raw operational datasets by resolving null values and statistical anomalies, boosting predictive feature accuracy by 20% using Pandas and NumPy.',
    category: 'AI & ML',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'Pandas', 'NumPy', 'Excel', 'Data Analysis', 'EDA', 'Pricing Elasticity'],
    metrics: ['🤖 Pricing Elasticity Quantification', '🧹 20% Predictive Feature Accuracy Boost', '💡 Revenue Optimization Insights'],
    githubUrl: 'https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302',
    liveUrl: 'https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302',
    featured: true,
    architecture: [
      'Historical Pricing Elasticity: Analyzed historical sales and demand datasets to quantify pricing elasticity across product lines.',
      'Anomaly & Null Resolution: Resolved statistical anomalies and null values in raw operational datasets.',
      'Accuracy Boost: Boosted predictive feature accuracy by 20% using Pandas and NumPy data preprocessing.'
    ]
  },
  {
    id: 'employee-data-analyzer',
    title: 'Employee Data Analyzer',
    tagline: 'Python — Pandas — NumPy — Matplotlib',
    description: 'Built an automated data ingestion and validation framework in Python, improving overall data accuracy by 25% and cutting manual processing time by 40%.',
    fullDescription: 'Built an automated data ingestion and validation framework in Python, improving overall data accuracy by 25% and cutting manual processing time by 40%. Generated statistical visualizations and summary KPI reports using Matplotlib and Pandas to communicate workforce distribution metrics to management.',
    category: 'Data Analytics',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Validation', 'Workforce Analytics'],
    metrics: ['🎯 25% Data Accuracy Boost', '⚡ 40% Manual Processing Time Cut', '📊 Matplotlib & Pandas Visual Reports'],
    githubUrl: 'https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302',
    liveUrl: 'https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302',
    featured: true,
    architecture: [
      'Automated Ingestion & Validation: Built an automated data ingestion and validation framework in Python.',
      'Processing Optimization: Improved overall data accuracy by 25% while cutting manual processing time by 40%.',
      'Management Reporting: Generated statistical visualizations and summary KPI reports using Matplotlib and Pandas to communicate workforce distribution metrics.'
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-vangrove',
    role: 'Junior Data Analyst',
    company: 'Vangrove Tech Private Limited',
    period: 'June 2026 – Present',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    description: 'Engineered standardized ETL and reporting workflows for multi-source business datasets, validated dataset integrity, constructed optimized SQL queries, and designed executive Excel dashboards.',
    achievements: [
      'Engineered standardized ETL and reporting workflows for multi-source business datasets using Python, SQL, and Excel, decreasing report turnaround time by 30%.',
      'Validated dataset integrity by eliminating missing values, schema inconsistencies, and duplicate entries across 10,000+ rows, improving baseline data quality by 20%.',
      'Constructed optimized SQL queries utilizing complex multi-table joins, subqueries, and aggregations, enhancing query execution speed by 35% for routine data retrieval.',
      'Designed dynamic executive Excel dashboards with Pivot Tables, Pivot Charts, Slicers, and XLOOKUP models, elevating stakeholder KPI visibility by 40%.',
      'Conducted exploratory data analysis (EDA) to uncover operational trends and demand patterns, presenting key findings to cross-functional leadership.'
    ],
    skillsUsed: ['Python', 'SQL', 'Advanced Excel', 'XLOOKUP', 'Pivot Tables', 'Power BI', 'ETL', 'EDA', 'MySQL', 'Query Optimization', 'Slicers']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'Bachelor of Technology in Computer Science Engineering (AI & ML)',
    issuer: 'Malla Reddy Institute of Technology and Science',
    date: '2022 – 2026',
    credentialId: 'Hyderabad, India',
    badgeColor: '#00f2fe'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Analytics Lead',
    role: 'Data & Reporting Team',
    company: 'Vangrove Tech Private Limited',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'KumaraAnurag consistently delivers optimized SQL queries, clean ETL scripts, and high-impact Excel dashboards that cut turnaround time and elevate executive visibility.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Dept. Supervisor',
    role: 'Dept. of CSE (AI & ML)',
    company: 'Malla Reddy Institute of Technology and Science',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Anurag excels at structuring raw data into clear, actionable visual dashboards and building automated Python data validation frameworks.',
    rating: 5
  }
];

