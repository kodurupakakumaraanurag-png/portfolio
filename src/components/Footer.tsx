import React, { useState, useEffect } from 'react';
import { Code2, ArrowUp, Mail, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit' }));
    };
    updateClock();
    const interval = setInterval(updateClock, 10000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Upper Row */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <Code2 size={24} className="text-cyan" />
              <span>{PERSONAL_INFO.name}</span>
            </a>
            <p className="footer-tagline">
              Entry-level Data Analyst & B.Tech CSE (AI & ML) Student translating raw data into business-oriented insights.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#hero">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#playground">Data Sandbox</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-status-col">
            <h4 className="footer-heading">Live Status</h4>
            <div className="footer-time-badge glass-card">
              <Clock size={15} className="text-cyan" />
              <span>Hyderabad: <strong>{timeStr || '12:00 PM'} IST</strong></span>
            </div>
            <div className="footer-status-pill">
              <span className="status-dot"></span>
              <span>Seeking Data Analyst & AI/ML Roles</span>
            </div>
          </div>
        </div>

        {/* Lower Row */}
        <div className="footer-bottom-row">
          <p className="footer-copy">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React 19, TypeScript & Vanilla CSS.
          </p>

          <div className="footer-actions">
            <div className="footer-socials">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="btn-icon-only btn-xs">
                <GithubIcon size={15} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon-only btn-xs">
                <LinkedinIcon size={15} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="btn-icon-only btn-xs">
                <Mail size={15} />
              </a>
            </div>

            <button onClick={scrollToTop} className="btn-icon-only back-to-top" title="Back to Top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
