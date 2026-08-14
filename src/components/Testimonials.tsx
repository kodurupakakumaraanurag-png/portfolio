import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { MessageSquare, Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="section testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Endorsements</span>
          </div>
          <h2 className="section-title">What Engineering Leaders Say</h2>
          <p className="section-subtitle">
            Feedback from Directors, VPs of Engineering, and senior colleagues I've collaborated with.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="testimonial-card glass-card">
              <Quote size={32} className="quote-icon" />
              
              <div className="testimonial-rating">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star-icon" fill="currentColor" />
                ))}
              </div>

              <p className="testimonial-content">"{t.content}"</p>

              <div className="testimonial-author">
                <img src={t.avatar} alt={t.name} className="author-avatar" />
                <div className="author-info">
                  <h4 className="author-name">{t.name}</h4>
                  <span className="author-role">
                    {t.role} • <strong className="text-cyan">{t.company}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
