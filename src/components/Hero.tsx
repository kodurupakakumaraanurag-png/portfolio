import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Mail, Check, Copy, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onShowToast: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume, onShowToast }) => {
  const titles = [
    'Junior Data Analyst',
    'SQL & Python Specialist',
    'Excel & Power BI Dashboard Creator',
    'ETL & Data Cleaning Engineer',
    'B.Tech CSE (AI & ML)'
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Typing effect logic
  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < fullText.length) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  const codeSnippet = `{
  "candidate": "${PERSONAL_INFO.name}",
  "role": "${PERSONAL_INFO.title}",
  "company": "Vangrove Tech Private Limited",
  "technical_skills": ["Python", "SQL", "Advanced Excel", "Power BI", "Pandas", "NumPy", "Matplotlib"],
  "focus": "ETL Workflows, SQL Optimization, Data Quality, Executive Dashboards & EDA",
  "status": "Junior Data Analyst @ Vangrove Tech | Open for Opportunities",
  "key_metrics": {
    "report_turnaround_time": "-30%",
    "data_quality_improvement": "+20%",
    "query_execution_speed": "+35%",
    "stakeholder_kpi_visibility": "+40%"
  }
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    onShowToast('Candidate JSON info copied to clipboard!');
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <section id="hero" className="hero-section section">
      <div className="ambient-glow glow-cyan"></div>
      <div className="ambient-glow glow-purple"></div>

      <div className="container hero-container">
        {/* Left Column: Headline & Intro */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-ping"></span>
            <MapPin size={14} className="text-cyan" />
            <span>{PERSONAL_INFO.location}</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="hero-name-gradient">{PERSONAL_INFO.name}</span>
            <br />
            <span className="hero-typing-container">
              <span className="hero-typing-text">{displayText}</span>
              <span className="typing-cursor">|</span>
            </span>
          </h1>

          <p className="hero-description">{PERSONAL_INFO.bio}</p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>

            <button onClick={onOpenContact} className="btn btn-secondary">
              <Mail size={18} />
              <span>Get in Touch</span>
            </button>

            <button onClick={onOpenResume} className="btn btn-secondary">
              <Sparkles size={18} className="text-amber" />
              <span>View Resume</span>
            </button>
          </div>

          {/* Social Links & Quick Contact */}
          <div className="hero-socials">
            <span className="social-label">Connect:</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="social-btn"
              title="Send Direct Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Stats Bar */}
          <div className="hero-stats-grid">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Code Sandbox Card */}
        <div className="hero-visual">
          <div className="code-card glass-card">
            {/* Window header */}
            <div className="code-card-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title">
                <Terminal size={14} />
                <span>anurag_profile.json</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="btn-icon-only btn-xs"
                title="Copy JSON snippet"
              >
                {copiedCode ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Window body with syntax highlighted formatting */}
            <div className="code-card-body">
              <pre className="code-pre">
                <code>
                  {'{'}<br />
                  &nbsp;&nbsp;<span className="json-key">"candidate"</span>: <span className="json-string">"{PERSONAL_INFO.name}"</span>,<br />
                  &nbsp;&nbsp;<span className="json-key">"role"</span>: <span className="json-string">"{PERSONAL_INFO.title}"</span>,<br />
                  &nbsp;&nbsp;<span className="json-key">"company"</span>: <span className="json-string">"Vangrove Tech Private Limited"</span>,<br />
                  &nbsp;&nbsp;<span className="json-key">"skills"</span>: [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="json-string">"Python"</span>, <span className="json-string">"SQL"</span>, <span className="json-string">"Advanced Excel"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="json-string">"Power BI"</span>, <span className="json-string">"Pandas"</span>, <span className="json-string">"NumPy"</span><br />
                  &nbsp;&nbsp;],<br />
                  &nbsp;&nbsp;<span className="json-key">"impact"</span>: {'{'}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="json-key">"report_turnaround"</span>: <span className="json-number">"-30%"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="json-key">"data_quality"</span>: <span className="json-number">"+20%"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="json-key">"query_speed"</span>: <span className="json-number">"+35%"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="json-key">"kpi_visibility"</span>: <span className="json-number">"+40%"</span><br />
                  &nbsp;&nbsp;{'}'}<br />
                  {'}'}
                </code>
              </pre>
            </div>

            {/* Live Terminal status bar */}
            <div className="code-card-footer">
              <div className="status-item">
                <span className="pulse-dot"></span>
                <span>Analytics Engine: <strong>ACTIVE</strong></span>
              </div>
              <span className="latency-tag">⚡ Junior Data Analyst</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

