import React, { useState, useEffect } from 'react';
import { Code2, Sun, Moon, FileText, Menu, X, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'skills', 'projects', 'playground', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero', id: 'hero' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Data Sandbox', href: '#playground', id: 'playground', badge: 'Live' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-brand">
          <div className="brand-icon">
            <Code2 size={22} className="text-cyan" />
          </div>
          <div className="brand-text">
            <span className="brand-name">{PERSONAL_INFO.name}</span>
            <span className="brand-role">Data Analyst</span>
          </div>
        </a>

        {/* Status Badge */}
        <div className="navbar-status-badge">
          <span className="status-dot"></span>
          <span>Available for hire</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.name}
              {link.badge && <span className="nav-item-badge">{link.badge}</span>}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="navbar-actions">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="btn-icon-only"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          {/* Resume Modal Trigger */}
          <button onClick={onOpenResume} className="btn btn-secondary btn-sm navbar-resume-btn">
            <FileText size={16} />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle btn-icon-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-card">
          <div className="mobile-drawer-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                {link.badge && <span className="nav-item-badge">{link.badge}</span>}
              </a>
            ))}
          </div>

          <div className="mobile-drawer-footer">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn btn-primary w-full"
            >
              <Sparkles size={16} />
              <span>View Full Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
