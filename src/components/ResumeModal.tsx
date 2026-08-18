import React from 'react';
import { X, Download, Printer, Mail, Phone, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onShowToast }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    onShowToast('📄 Downloading Kodurupaka_Kumara_Anurag_Resume.pdf');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="resume-modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="modal-header">
          <div className="modal-title-group">
            <h2 className="modal-title">Curriculum Vitae</h2>
            <span className="project-category-badge">Verified PDF Resume</span>
          </div>
          <div className="modal-actions-right">
            <button onClick={handlePrint} className="btn btn-secondary btn-sm">
              <Printer size={15} />
              <span>Print</span>
            </button>
            <button onClick={handleDownload} className="btn btn-primary btn-sm">
              <Download size={15} />
              <span>Download PDF</span>
            </button>
            <button onClick={onClose} className="btn-icon-only modal-close-btn" aria-label="Close Resume">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Resume Content View - PDF Replica */}
        <div className="resume-paper">
          {/* Header */}
          <div className="resume-header text-center">
            <h1 className="resume-name">{PERSONAL_INFO.name}</h1>
            <div className="resume-contact-bar justify-center">
              <span>{PERSONAL_INFO.location}</span>
              <span className="divider">|</span>
              <span><Phone size={12} /> {PERSONAL_INFO.phone}</span>
              <span className="divider">|</span>
              <span><Mail size={12} /> {PERSONAL_INFO.email}</span>
            </div>
            <div className="resume-links-bar justify-center">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={12} /> LinkedIn
              </a>
              <span className="divider">|</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon size={12} /> GitHub
              </a>
              <span className="divider">|</span>
              <a href="#hero" onClick={onClose}>
                <ExternalLink size={12} /> Portfolio
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="resume-section">
            <h3 className="resume-section-title">PROFESSIONAL SUMMARY</h3>
            <p className="resume-text">{PERSONAL_INFO.bio}</p>
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <h3 className="resume-section-title">TECHNICAL SKILLS</h3>
            <div className="resume-skills-block">
              <p><strong>Programming Languages:</strong> Python, SQL (MySQL, SQLite)</p>
              <p><strong>Data Analysis & Libraries:</strong> Pandas, NumPy, Data Cleaning, Data Validation, Exploratory Data Analysis (EDA)</p>
              <p><strong>Spreadsheets & Reporting:</strong> Advanced Excel (VLOOKUP, XLOOKUP, Pivot Tables, Pivot Charts, Slicers, KPI Reporting, Dashboards)</p>
              <p><strong>BI & Visualization:</strong> Power BI, Matplotlib, Dashboard Development, Business Reporting</p>
              <p><strong>Databases & Querying:</strong> SQL Joins, Subqueries, Aggregations, GROUP BY, Indexing, Query Optimization</p>
              <p><strong>Statistical Methods:</strong> Descriptive Statistics, Trend Analysis, Correlation Analysis, Predictive Modeling</p>
              <p><strong>Developer Tools & Platforms:</strong> Git, GitHub, VS Code</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="resume-section">
            <h3 className="resume-section-title">PROFESSIONAL EXPERIENCE</h3>
            <div className="resume-exp-item">
              <div className="exp-item-header">
                <strong>Vangrove Tech Private Limited</strong>
                <span className="exp-item-location">Hyderabad, Telangana</span>
              </div>
              <div className="exp-item-subheader">
                <em>Junior Data Analyst</em>
                <span className="exp-item-date">June 2026 – Present</span>
              </div>
              <ul className="resume-bullets">
                <li>Engineered standardized ETL and reporting workflows for multi-source business datasets using Python, SQL, and Excel, decreasing report turnaround time by 30%.</li>
                <li>Validated dataset integrity by eliminating missing values, schema inconsistencies, and duplicate entries across 10,000+ rows, improving baseline data quality by 20%.</li>
                <li>Constructed optimized SQL queries utilizing complex multi-table joins, subqueries, and aggregations, enhancing query execution speed by 35% for routine data retrieval.</li>
                <li>Designed dynamic executive Excel dashboards with Pivot Tables, Pivot Charts, Slicers, and XLOOKUP models, elevating stakeholder KPI visibility by 40%.</li>
                <li>Conducted exploratory data analysis (EDA) to uncover operational trends and demand patterns, presenting key findings to cross-functional leadership.</li>
              </ul>
            </div>
          </div>

          {/* Academic Projects */}
          <div className="resume-section">
            <h3 className="resume-section-title">ACADEMIC PROJECTS</h3>
            
            <div className="resume-exp-item">
              <div className="exp-item-header">
                <strong>Retail Sales Dashboard</strong> | <em>Microsoft Excel, Advanced Formulas, Pivot Charts, Slicers</em>
              </div>
              <ul className="resume-bullets">
                <li>Developed an end-to-end interactive retail sales analytics dashboard by cleaning and structuring 15,000+ transactional records for cross-category performance analysis.</li>
                <li>Streamlined business decision-making by 30% through dynamic KPI tracking and multidimensional slicers evaluating revenue by product, category, and region.</li>
              </ul>
            </div>

            <div className="resume-exp-item">
              <div className="exp-item-header">
                <strong>AI-Powered Dynamic Pricing & Demand Forecasting</strong> | <em>Python, Pandas, NumPy, Excel</em>
              </div>
              <ul className="resume-bullets">
                <li>Analyzed historical sales and demand datasets to quantify pricing elasticity and identify revenue optimization opportunities across diverse product lines.</li>
                <li>Preprocessed raw operational datasets by resolving null values and statistical anomalies, boosting predictive feature accuracy by 20% using Pandas and NumPy.</li>
              </ul>
            </div>

            <div className="resume-exp-item">
              <div className="exp-item-header">
                <strong>Employee Data Analyzer</strong> | <em>Python, Pandas, NumPy, Matplotlib</em>
              </div>
              <ul className="resume-bullets">
                <li>Built an automated data ingestion and validation framework in Python, improving overall data accuracy by 25% and cutting manual processing time by 40%.</li>
                <li>Generated statistical visualizations and summary KPI reports using Matplotlib and Pandas to communicate workforce distribution metrics to management.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h3 className="resume-section-title">EDUCATION</h3>
            <div className="resume-exp-item">
              <div className="exp-item-header">
                <strong>Malla Reddy Institute of Technology and Science</strong>
                <span className="exp-item-location">Hyderabad, India</span>
              </div>
              <div className="exp-item-subheader">
                <em>Bachelor of Technology in Computer Science Engineering (AI & ML)</em>
                <span className="exp-item-date">2022 – 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <span>Junior Data Analyst @ Vangrove Tech | Open for Data Analyst & AI/ML Opportunities</span>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};

