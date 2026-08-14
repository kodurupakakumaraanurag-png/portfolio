import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Layers, Star, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Excel & Dashboards', 'AI & ML', 'Data Analytics'];

  const filteredProjects = PROJECTS.filter(
    (p) => selectedCategory === 'All' || p.category === selectedCategory
  );

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Academic Project Highlights</span>
          </div>
          <h2 className="section-title">Academic Projects & Data Analytics</h2>
          <p className="section-subtitle">
            Hands-on academic projects demonstrating data cleaning, exploratory data analysis, interactive Excel dashboards, and machine learning demand forecasting.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="projects-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`project-tab ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project: Project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Image Preview Container */}
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-card-image" />
                <div className="project-image-overlay">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-primary btn-sm project-inspect-btn"
                  >
                    <span>Inspect Project</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <Star size={12} fill="currentColor" />
                    <span>Academic Project</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <div className="project-header-row">
                  <span className="project-category">{project.category}</span>
                  <div className="project-actions-quick">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon-only btn-xs"
                      title="LinkedIn Profile"
                    >
                      <GithubIcon size={15} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon-only btn-xs"
                      title="LinkedIn Profile"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>

                <h3
                  className="project-title"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-short-desc">{project.description}</p>

                {/* Metrics */}
                <div className="project-metrics-row">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <span key={i} className="metric-chip">
                      {m}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="project-card-footer">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn-view-details"
                >
                  <span>View Details & Insights</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
