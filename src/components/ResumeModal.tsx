import React from 'react';
import { X, Download, Printer, Mail, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { LinkedinIcon } from './Icons';

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

        {/* Resume Content View */}
        <div className="resume-paper">
          {/* Header */}
          <div className="resume-header">
            <h1 className="resume-name">{PERSONAL_INFO.name.toUpperCase()}</h1>
            <p className="resume-tagline">{PERSONAL_INFO.title}</p>
            <div className="resume-contact-bar">
              <span><MapPin size={13} /> {PERSONAL_INFO.location}</span>
              <span><Phone size={13} /> {PERSONAL_INFO.phone}</span>
              <span><Mail size={13} /> {PERSONAL_INFO.email}</span>
              <span><LinkedinIcon size={13} /> linkedin.com/in/kodurupaka-kumaraanurag-4b450b302</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="resume-section">
            <h3 className="resume-section-title">Professional Summary</h3>
            <p className="resume-text">{PERSONAL_INFO.bio}</p>
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <h3 className="resume-section-title">Technical Skills</h3>
            <div className="resume-skills-grid">
              <div>
                <strong>Programming Languages:</strong> Python, SQL
              </div>
              <div>
                <strong>Data Analysis:</strong> Pandas, NumPy, Data Cleaning, Data Validation, Exploratory Data Analysis (EDA)
              </div>
              <div>
                <strong>Data Visualization & BI:</strong> Microsoft Excel, Excel Dashboards, Pivot Tables, Pivot Charts, Slicers, Matplotlib, Power BI
              </div>
              <div>
                <strong>Databases:</strong> MySQL, SQLite, SQL Joins, Subqueries, Aggregations, GROUP BY
              </div>
              <div>
                <strong>Machine Learning:</strong> Scikit-learn, Classification, Model Evaluation
              </div>
              <div>
                <strong>Tools:</strong> Git, GitHub, Streamlit, Flask, REST APIs
              </div>
            </div>
          </div>

          {/* Academic Projects */}
          <div className="resume-section">
            <h3 className="resume-section-title">Academic Projects</h3>
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="resume-exp-item">
                <div className="exp-item-header">
                  <strong>{proj.title}</strong> — <span className="text-muted">Academic Project</span>
                  <span className="exp-item-date">{proj.tags.slice(0, 4).join(' • ')}</span>
                </div>
                <ul className="resume-bullets">
                  {proj.architecture.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="resume-section">
            <h3 className="resume-section-title">Education</h3>
            <div className="resume-certs">
              <div className="resume-cert-line">
                <strong>Malla Reddy Institute of Technology and Science</strong> — Hyderabad, India
                <br />
                <em>B.Tech in Computer Science Engineering (AI & ML)</em> (2022 – 2026)
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <span>Available for Data Analyst & AI/ML opportunities.</span>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
