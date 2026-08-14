import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Play } from 'lucide-react';
import type { Project } from '../types';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'demo'>('overview');

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="project-category-badge">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
          <button onClick={onClose} className="btn-icon-only modal-close-btn" aria-label="Close Dialog">
            <X size={20} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-tabs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`modal-tab ${activeTab === 'overview' ? 'active' : ''}`}
          >
            Overview & Metrics
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`modal-tab ${activeTab === 'architecture' ? 'active' : ''}`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`modal-tab ${activeTab === 'demo' ? 'active' : ''}`}
          >
            Interactive Mock Preview
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="modal-body">
          {activeTab === 'overview' && (
            <div className="tab-content overview-tab">
              {/* Project Hero Image */}
              <div className="project-modal-image-wrapper">
                <img src={project.image} alt={project.title} className="project-modal-image" />
                <div className="image-overlay-gradient"></div>
              </div>

              <div className="project-tagline-box">
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-full-desc">{project.fullDescription}</p>
              </div>

              {/* Metrics Highlights */}
              <div className="project-metrics-section">
                <h4 className="sub-heading">Key Achievements & SLA Metrics</h4>
                <div className="metrics-grid">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="metric-pill glass-card">
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Used */}
              <div className="project-tech-section">
                <h4 className="sub-heading">Tech Stack & Tools</h4>
                <div className="tech-badge-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="tab-content architecture-tab">
              <div className="arch-header">
                <Layers size={20} className="text-cyan" />
                <h3>Engineering & System Design Highlights</h3>
              </div>

              <div className="arch-steps">
                {project.architecture.map((step, idx) => (
                  <div key={idx} className="arch-step-card glass-card">
                    <div className="step-number">{idx + 1}</div>
                    <div className="step-text">
                      <CheckCircle2 size={16} className="text-emerald" />
                      <span>{step}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="arch-note-box glass-card">
                <Cpu size={18} className="text-purple" />
                <p>
                  Built following enterprise RFC design standards with decoupled message queues, idempotency guarantees, zero-downtime Blue/Green deployment pipelines, and end-to-end telemetry monitoring.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'demo' && (
            <div className="tab-content demo-tab">
              <div className="mock-demo-window glass-card">
                <div className="mock-demo-bar">
                  <div className="window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="url-bar">
                    <Play size={12} className="text-cyan" />
                    <span>{project.liveUrl}</span>
                  </div>
                </div>

                <div className="mock-demo-viewport">
                  <img src={project.image} alt="Live Demo Screen" className="mock-screen-img" />
                  <div className="mock-overlay-banner">
                    <h4>Interactive Live Demo Sandbox Available</h4>
                    <p>Experience the production deployment or inspect open-source code repositories.</p>
                    <div className="mock-cta-buttons">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <ExternalLink size={16} />
                        <span>Open Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        <GithubIcon size={16} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <div className="footer-links">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <GithubIcon size={16} />
              <span>View Source</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <ExternalLink size={16} />
              <span>Live Application</span>
            </a>
          </div>
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
