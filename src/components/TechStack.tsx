import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import type { Skill } from '../types';
import { 
  Code2, FileCode2, Palette, DatabaseZap, Server, Cpu, 
  Network, Binary, Cloud, Container, Workflow, Layers, 
  Database, Zap, MessageSquareShare, Bot, Terminal, Search, Sparkles
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Programming & Analytics', 'Data Visualization & BI', 'Databases & SQL', 'Machine Learning & Tools'];

  // Map icon names to Lucide icon components
  const renderIcon = (iconName: string) => {
    const props = { size: 22, className: 'skill-icon' };
    switch (iconName) {
      case 'Code2': return <Code2 {...props} />;
      case 'FileCode2': return <FileCode2 {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'DatabaseZap': return <DatabaseZap {...props} />;
      case 'Server': return <Server {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Network': return <Network {...props} />;
      case 'Binary': return <Binary {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'Container': return <Container {...props} />;
      case 'Workflow': return <Workflow {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'MessageSquareShare': return <MessageSquareShare {...props} />;
      case 'Bot': return <Bot {...props} />;
      case 'Terminal': default: return <Terminal {...props} />;
    }
  };

  const filteredSkills = SKILLS.filter((skill) => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="section tech-stack-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Technical Skills</span>
          </div>
          <h2 className="section-title">Technical Skills & Expertise</h2>
          <p className="section-subtitle">
            Proficiencies across Python data libraries, SQL database querying, Microsoft Excel dashboards, Power BI, and Machine Learning.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="skills-filter-wrapper">
          {/* Category Tabs */}
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="skills-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, SQL, Excel)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill: Skill) => (
            <div key={skill.name} className={`skill-card glass-card ${skill.highlight ? 'skill-highlight' : ''}`}>
              <div className="skill-card-top">
                <div className="skill-icon-wrapper">
                  {renderIcon(skill.iconName)}
                </div>
                <div className="skill-badges">
                  {skill.highlight && <span className="highlight-badge">Core Expert</span>}
                  <span className="exp-badge">{skill.experienceYears}</span>
                </div>
              </div>

              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">{skill.description}</p>
              </div>

              {/* Mastery Progress Bar */}
              <div className="skill-mastery">
                <div className="mastery-header">
                  <span className="mastery-label">Proficiency</span>
                  <span className="mastery-value">{skill.level}%</span>
                </div>
                <div className="mastery-track">
                  <div
                    className="mastery-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="no-results glass-card">
            <p>No technologies found matching "{searchQuery}" in category "{selectedCategory}".</p>
            <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="btn btn-secondary btn-sm">
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
