import React, { useState } from 'react';
import { EXPERIENCES, CERTIFICATIONS } from '../data/portfolioData';
import { Briefcase, Award, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeExperienceId, setActiveExperienceId] = useState<string>(EXPERIENCES[0].id);

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Career & Accomplishments</span>
          </div>
          <h2 className="section-title">Professional Work Experience</h2>
          <p className="section-subtitle">
            Demonstrated history of driving engineering excellence, scaling cloud infrastructure, and mentoring high-performing tech teams.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="experience-layout">
          {/* Left Navigation Timeline Tabs */}
          <div className="experience-timeline-nav">
            {EXPERIENCES.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperienceId(exp.id)}
                className={`timeline-tab-btn glass-card ${activeExperienceId === exp.id ? 'active' : ''}`}
              >
                <div className="tab-role-info">
                  <h4 className="tab-role">{exp.role}</h4>
                  <span className="tab-company">{exp.company}</span>
                </div>
                <div className="tab-meta">
                  <span className="tab-period">{exp.period}</span>
                  <ChevronRight size={16} className="tab-chevron" />
                </div>
              </button>
            ))}
          </div>

          {/* Right Experience Details Content */}
          <div className="experience-details-content glass-card">
            {EXPERIENCES.filter((exp) => exp.id === activeExperienceId).map((exp) => (
              <div key={exp.id} className="experience-card-inner">
                <div className="exp-header">
                  <div className="exp-title-block">
                    <span className="exp-type-badge">{exp.type}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="exp-meta-block">
                    <div className="meta-item">
                      <Calendar size={15} className="text-cyan" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin size={15} className="text-purple" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="exp-description">{exp.description}</p>

                {/* Key Impact & Achievements */}
                <div className="achievements-section">
                  <h4 className="sub-heading">Key Achievements & SLA Impact</h4>
                  <div className="achievements-list">
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} className="achievement-item">
                        <CheckCircle2 size={18} className="achievement-icon text-emerald" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Used */}
                <div className="exp-skills-section">
                  <h4 className="sub-heading">Tech & Tools Employed</h4>
                  <div className="tech-badge-list">
                    {exp.skillsUsed.map((skill) => (
                      <span key={skill} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Certifications */}
        <div className="certifications-block">
          <div className="cert-header">
            <Award size={20} className="text-amber" />
            <h3 className="cert-title">Verified Industry Certifications</h3>
          </div>

          <div className="certifications-grid">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="cert-card glass-card">
                <div className="cert-badge-icon" style={{ borderColor: cert.badgeColor }}>
                  <Sparkles size={20} style={{ color: cert.badgeColor }} />
                </div>
                <div className="cert-info">
                  <h4 className="cert-name">{cert.title}</h4>
                  <span className="cert-issuer">{cert.issuer}</span>
                  <div className="cert-meta">
                    <span className="cert-date">Valid: {cert.date}</span>
                    <span className="cert-id">ID: {cert.credentialId}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
