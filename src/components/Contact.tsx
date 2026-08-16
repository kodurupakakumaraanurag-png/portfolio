import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MapPin, MessageSquare, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Data Analyst / AI & ML Role Opportunity',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    onShowToast(`Copied ${PERSONAL_INFO.email} to clipboard!`);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill out all required fields.');
      return;
    }

    setSubmitting(true);

    try {
      // Support Web3Forms if access key is set, otherwise default to FormSubmit AJAX endpoint
      const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      
      let res: Response;
      if (web3Key) {
        res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3Key,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            from_name: 'Portfolio Contact Form'
          })
        });
      } else {
        // Direct FormSubmit AJAX endpoint targeting your email address
        const targetEmail = PERSONAL_INFO.email;
        res = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: `Portfolio Inquiry: ${formData.subject} (${formData.name})`,
            _template: 'table',
            _captcha: 'false'
          })
        });
      }

      if (res.ok) {
        onShowToast('🎉 Thank you! Your message has been sent to my inbox.');
        setFormData({
          name: '',
          email: '',
          subject: 'Data Analyst / AI & ML Role Opportunity',
          message: ''
        });
      } else {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to send message via form endpoint.');
      }
    } catch (err: any) {
      console.error('Email submission error:', err);
      // Fallback to mailto link if direct AJAX fails
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      onShowToast('⚠️ Sending form failed. Opening your email app instead...');
      window.location.href = mailtoUrl;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-subtitle">
            Open for Data Analyst roles, Excel & Power BI dashboard creation, and AI/ML entry-level opportunities.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="contact-info-column">
            <div className="info-card glass-card">
              <h3 className="info-title">Contact Channels</h3>
              <p className="info-desc">
                Feel free to send a direct message, reach out on LinkedIn, or copy my email address below.
              </p>

              <div className="contact-methods-list">
                {/* Email Item */}
                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <Mail size={18} className="text-cyan" />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Direct Email</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="method-value">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="btn-icon-only btn-xs"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <MapPin size={18} className="text-purple" />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Primary Location</span>
                    <span className="method-value">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                {/* Response Time Item */}
                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <Clock size={18} className="text-amber" />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Average Response Time</span>
                    <span className="method-value">&lt; 12 hours SLA</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="social-links-block">
                <span className="sub-heading">Find Me Online</span>
                <div className="social-buttons-row">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-column">
            <form onSubmit={handleSubmit} className="contact-form glass-card">
              <div className="form-header">
                <MessageSquare size={20} className="text-cyan" />
                <h3>Send a Message</h3>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Topic / Subject</label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="form-select"
                >
                  <option value="Data Analyst / AI & ML Role Opportunity">Data Analyst / AI & ML Role Opportunity</option>
                  <option value="Data Cleaning & Dashboard Project">Data Cleaning & Dashboard Project</option>
                  <option value="Academic Project Collaboration">Academic Project Collaboration</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your data analytics needs, role opportunities, or project scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" disabled={submitting} className="btn btn-primary w-full">
                {submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
