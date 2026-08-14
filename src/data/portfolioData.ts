import type { Project, Skill, ExperienceItem, Certification, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Kodurupaka Kumara Anurag',
  title: 'Data Analyst & B.Tech CSE (AI & ML) Student',
  subtitle: 'Translating raw structured datasets into business-oriented insights using Python, SQL, Excel, and Machine Learning.',
  bio: 'Entry-level Data Analyst and B.Tech Computer Science Engineering (AI & ML) student with hands-on experience in Python, SQL, Excel, Pandas, data cleaning, exploratory data analysis (EDA), reporting, and dashboard development. Experienced in analyzing structured datasets, querying databases, validating data, and translating findings into business-oriented insights. Familiar with Power BI, MySQL, SQLite, Git/GitHub, and machine learning.',
  location: 'Hyderabad, Telangana',
  phone: '+91 9502795929',
  email: 'kodurupakakumaraanurag@gmail.com',
  github: 'https://github.com/kodurupakakumaraanurag-png',
  linkedin: 'https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302',
  status: 'Available for Data Analyst & AI/ML Roles',
  education: {
    institution: 'Malla Reddy Institute of Technology and Science',
    degree: 'B.Tech in Computer Science Engineering (AI & ML)',
    location: 'Hyderabad, India',
    period: '2022 – 2026'
  },
  stats: [
    { value: '2022-2026', label: 'B.Tech CSE (AI & ML)' },
    { value: '3', label: 'Academic Projects' },
    { value: '25%', label: 'Data Accuracy Improvement' },
    { value: '100%', label: 'Data Cleaning Readiness' }
  ]
};

export const SKILLS: Skill[] = [
  // Programming & Analytics
  { name: 'Python', category: 'Programming & Analytics', level: 92, experienceYears: 'Core', iconName: 'FileCode2', description: 'Pandas, NumPy, Matplotlib, Data Cleaning, Data Preprocessing', highlight: true },
  { name: 'SQL', category: 'Programming & Analytics', level: 90, experienceYears: 'Core', iconName: 'Database', description: 'Database Querying, SQL Joins, Subqueries, Aggregations, GROUP BY', highlight: true },
  { name: 'Pandas & NumPy', category: 'Programming & Analytics', level: 94, experienceYears: 'Core', iconName: 'DatabaseZap', description: 'Handling missing values, duplicate records, data cleaning & preprocessing', highlight: true },
  { name: 'Data Cleaning & Validation', category: 'Programming & Analytics', level: 95, experienceYears: 'Core', iconName: 'Zap', description: 'Preprocessing workforce and sales data for high readiness and reliability', highlight: true },
  { name: 'Exploratory Data Analysis (EDA)', category: 'Programming & Analytics', level: 90, experienceYears: 'Core', iconName: 'Binary', description: 'Uncovering trends, correlations, pricing patterns, and demand insights', highlight: true },

  // Data Visualization & BI
  { name: 'Microsoft Excel', category: 'Data Visualization & BI', level: 95, experienceYears: 'Core', iconName: 'Palette', description: 'Excel Dashboards, Pivot Tables, Pivot Charts, Slicers, KPI Visualizations', highlight: true },
  { name: 'Matplotlib', category: 'Data Visualization & BI', level: 88, experienceYears: 'Core', iconName: 'Palette', description: 'Visual distribution reports, trend plots, and summary charts' },
  { name: 'Power BI', category: 'Data Visualization & BI', level: 85, experienceYears: 'Familiar', iconName: 'Layers', description: 'Interactive dashboard reports, visual analytics, and data modeling' },

  // Databases & SQL
  { name: 'MySQL', category: 'Databases & SQL', level: 88, experienceYears: 'Hands-on', iconName: 'Database', description: 'Relational data modeling, structured query execution, data aggregation' },
  { name: 'SQLite', category: 'Databases & SQL', level: 86, experienceYears: 'Hands-on', iconName: 'Database', description: 'Lightweight database querying, embedded table schemas, query joins' },

  // Machine Learning & Tools
  { name: 'Machine Learning (Scikit-learn)', category: 'Machine Learning & Tools', level: 82, experienceYears: 'Academic', iconName: 'Bot', description: 'Classification models, model evaluation, pricing & demand analysis', highlight: true },
  { name: 'Git & GitHub', category: 'Machine Learning & Tools', level: 88, experienceYears: 'Hands-on', iconName: 'Workflow', description: 'Version control, repository management, collaborative academic projects' },
  { name: 'Streamlit & Flask', category: 'Machine Learning & Tools', level: 82, experienceYears: 'Familiar', iconName: 'Server', description: 'Building interactive web wrappers for Python data tools' },
  { name: 'REST APIs', category: 'Machine Learning & Tools', level: 80, experienceYears: 'Familiar', iconName: 'Network', description: 'Fetching structured data payloads for analytical tools' }
];

export const PROJECTS: Project[] = [
  {
    id: 'retail-sales-dashboard',
    title: 'Retail Sales Dashboard',
    tagline: 'Microsoft Excel — Pivot Tables — Pivot Charts — Slicers',
    description: 'Cleaned and organized retail sales datasets in Microsoft Excel and developed an interactive dashboard with Slicers to track key sales trends.',
    fullDescription: 'Cleaned and organized retail sales datasets in Microsoft Excel to improve data readiness for analysis and reporting. Analyzed product, category, and time-period performance using Pivot Tables and Pivot Charts to identify sales trends. Developed an interactive Excel dashboard with Slicers and KPI-based visualizations to support business-oriented reporting. Identified top-performing products, sales patterns, and category-level trends to generate actionable sales insights.',
    category: 'Excel & Dashboards',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['Microsoft Excel', 'Pivot Tables', 'Pivot Charts', 'Slicers', 'Data Cleaning', 'Sales Insights'],
    metrics: ['📊 100% Data Cleaning Readiness', '📈 Category & Time-Period Performance', '💡 Actionable Sales Insights'],
    githubUrl: 'https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302',
    liveUrl: 'https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302',
    featured: true,
    architecture: [
      'Data Cleaning: Cleaned and organized raw retail sales datasets in Microsoft Excel to improve data readiness for analysis and reporting.',
      'Performance Analysis: Analyzed product, category, and time-period performance using Pivot Tables and Pivot Charts to identify sales trends.',
      'Dashboard Development: Developed an interactive Excel dashboard with Slicers and KPI-based visualizations to support business-oriented reporting.',
      'Insight Generation: Identified top-performing products, sales patterns, and category-level trends to generate actionable sales insights.'
    ]
  },
  {
    id: 'ai-dynamic-pricing',
    title: 'AI-Powered Dynamic Pricing & Demand Forecasting System',
    tagline: 'Python — Pandas — NumPy — Excel — Data Analysis',
    description: 'Analyzed historical sales and demand datasets using Python, Pandas, and NumPy to uncover pricing patterns and relationships.',
    fullDescription: 'Analyzed historical sales and demand datasets to identify pricing patterns, product performance, and demand trends. Cleaned and prepared datasets by handling missing values, duplicate records, and inconsistent data for reliable analysis. Performed exploratory data analysis using Python, Pandas, and NumPy to uncover relationships between pricing, sales, and demand. Generated business-oriented insights to support data-driven pricing and demand analysis.',
    category: 'AI & ML',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'Pandas', 'NumPy', 'Excel', 'Data Analysis', 'EDA', 'Demand Forecasting'],
    metrics: ['🤖 Historical Demand Pattern Mining', '🧹 Resolved Missing & Duplicate Data', '💡 Pricing Strategy Insights'],
    githubUrl: 'https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302',
    liveUrl: 'https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302',
    featured: true,
    architecture: [
      'Historical Trend Analysis: Analyzed historical sales and demand datasets to identify pricing patterns, product performance, and demand trends.',
      'Data Cleaning & Preparation: Cleaned and prepared datasets by handling missing values, duplicate records, and inconsistent data for reliable analysis.',
      'Exploratory Data Analysis: Performed exploratory data analysis using Python, Pandas, and NumPy to uncover relationships between pricing, sales, and demand.',
      'Decision Support Insights: Generated business-oriented insights to support data-driven pricing and demand analysis.'
    ]
  },
  {
    id: 'employee-data-analyzer',
    title: 'Employee Data Analyzer',
    tagline: 'Python — Pandas — NumPy — Matplotlib',
    description: 'Python-based data analysis tool to clean, validate, and analyze employee datasets, improving data accuracy by 25%.',
    fullDescription: 'Developed a Python-based data analysis tool to clean, validate, and analyze employee datasets. Preprocessed workforce data using Pandas and NumPy to identify trends, patterns, and data-quality issues. Created Matplotlib visualizations and summary reports to communicate analytical findings clearly. Automated data-validation processes, improving data accuracy by 25%.',
    category: 'Data Analytics',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Validation', 'Workforce Analytics'],
    metrics: ['🎯 25% Data Accuracy Improvement', '📊 Matplotlib Summary Reports', '⚡ Automated Validation Checks'],
    githubUrl: 'https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302',
    liveUrl: 'https://linkedin.com/in/kodurupaka-kumaraanurag-4b450b302',
    featured: true,
    architecture: [
      'Tool Development: Developed a Python-based data analysis tool to clean, validate, and analyze employee datasets.',
      'Data Preprocessing: Preprocessed workforce data using Pandas and NumPy to identify trends, patterns, and data-quality issues.',
      'Visualization & Reporting: Created Matplotlib visualizations and summary reports to communicate analytical findings clearly.',
      'Process Automation: Automated data-validation processes, improving data accuracy by 25%.'
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Academic Projects & Data Analysis',
    company: 'Malla Reddy Institute of Technology and Science',
    period: '2022 – 2026',
    location: 'Hyderabad, Telangana',
    type: 'Lead',
    description: 'Executed academic projects involving data cleaning, exploratory data analysis, interactive Excel dashboards, Python scripting, and machine learning models.',
    achievements: [
      'Retail Sales Dashboard: Cleaned raw datasets in Microsoft Excel, analyzed sales trends across product categories using Pivot Tables & Pivot Charts, and created interactive dashboards with Slicers.',
      'AI-Powered Dynamic Pricing & Demand Forecasting System: Cleaned datasets by resolving missing values and duplicate records, performing EDA with Python, Pandas, and NumPy.',
      'Employee Data Analyzer: Developed automated Python data validation tool for workforce datasets with Matplotlib summary visualizations, improving data accuracy by 25%.'
    ],
    skillsUsed: ['Python', 'SQL', 'Microsoft Excel', 'Pandas', 'NumPy', 'Matplotlib', 'Pivot Tables', 'Power BI', 'Scikit-learn', 'MySQL', 'SQLite']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'B.Tech in Computer Science Engineering (AI & ML)',
    issuer: 'Malla Reddy Institute of Technology and Science',
    date: '2022 – 2026',
    credentialId: 'Hyderabad, Telangana, India',
    badgeColor: '#00f2fe'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Academic Project Supervisor',
    role: 'Dept. of CSE (AI & ML)',
    company: 'Malla Reddy Institute of Technology and Science',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Kumara Anurag exhibits exceptional analytical skills, dataset cleaning precision, and strong problem-solving in Python, SQL, and Excel analytics.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Academic Collaboration Lead',
    role: 'B.Tech CSE (AI & ML)',
    company: 'MRITS Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Anurag excels at structuring raw data into clear, actionable visual dashboards and automating data validation workflows.',
    rating: 5
  }
];
