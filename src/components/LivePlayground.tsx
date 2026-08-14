import React, { useState } from 'react';
import { Play, Check, Copy, Zap, RefreshCw, Cpu, Code } from 'lucide-react';
import { SKILLS, PERSONAL_INFO } from '../data/portfolioData';

export const LivePlayground: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<'health' | 'query' | 'skills' | 'ai'>('health');
  const [loading, setLoading] = useState(false);
  const [executionTime, setExecutionTime] = useState<number | null>(12);
  const [copied, setCopied] = useState(false);

  // Custom user parameters for simulated AI matcher
  const [roleInput, setRoleInput] = useState('Data Analyst');
  const [techNeed, setTechNeed] = useState('Python, SQL, Excel, Power BI');

  const getResponseData = () => {
    switch (selectedEndpoint) {
      case 'health':
        return {
          status: 200,
          service: 'Data-Analytics-Pipeline-Node-HYD',
          timestamp: new Date().toISOString(),
          dataset_readiness: '100% CLEAN & VERIFIED',
          telemetry: {
            data_validation_boost: '25%',
            active_pandas_dataframes: 14,
            sql_query_latency_ms: 1.2,
            records_processed: 250000,
            duplicate_error_pct: 0.0
          },
          environment: {
            python_version: '3.11',
            sql_engine: 'MySQL / SQLite',
            status: 'ACTIVE'
          }
        };

      case 'query':
        return {
          status: 200,
          database_engine: 'MySQL / SQLite Query Execution',
          original_query: 'SELECT product_category, SUM(sales_amount) AS total_sales, AVG(demand_units) FROM retail_sales GROUP BY product_category ORDER BY total_sales DESC;',
          query_analysis: 'Aggregated structured sales records using GROUP BY and indexed joins.',
          data_quality_check: 'Passed: 0 missing values, 0 duplicate records.',
          performance_gain: 'Cleaned and structured raw dataset for immediate Pivot Chart & Dashboard visualization.'
        };

      case 'skills':
        return {
          status: 200,
          candidate: PERSONAL_INFO.name,
          institution: PERSONAL_INFO.education.institution,
          degree: PERSONAL_INFO.education.degree,
          skills_count: SKILLS.length,
          core_competencies: SKILLS.filter(s => s.highlight).map(s => ({
            skill: s.name,
            proficiency: `${s.level}%`,
            category: s.category
          }))
        };

      case 'ai':
        return {
          status: 200,
          ai_evaluator: 'Data-Talent-Matchmaker-v2.0',
          evaluated_role: roleInput || 'Data Analyst',
          required_stack: techNeed || 'Python, SQL, Excel',
          match_score: '99.2%',
          fit_analysis: [
            'Hands-on expertise in Python, SQL, Excel Pivot Tables, Slicers, and Power BI.',
            'Proven track record cleaning workforce & sales data, improving data accuracy by 25%.',
            'Strong background in Exploratory Data Analysis (EDA) & Machine Learning (Scikit-learn).',
            'Solid candidate for Entry-Level Data Analyst & AI/ML Engineer roles.'
          ],
          recommendation: 'STRONG HIRE MATCH'
        };
    }
  };

  const [responseOutput, setResponseOutput] = useState<any>(getResponseData());

  const handleExecute = () => {
    setLoading(true);
    const start = performance.now();

    setTimeout(() => {
      setResponseOutput(getResponseData());
      const end = performance.now();
      setExecutionTime(Math.round(end - start + Math.random() * 8));
      setLoading(false);
    }, 300);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(responseOutput, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" className="section playground-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Zap size={14} />
            <span>Interactive Data Sandbox</span>
          </div>
          <h2 className="section-title">Live Data Analytics & SQL Console</h2>
          <p className="section-subtitle">
            Test simulated SQL queries, dataset validation pipelines, and candidate matching endpoints in real-time.
          </p>
        </div>

        <div className="playground-console glass-card">
          {/* Console Header / Endpoint Bar */}
          <div className="console-header">
            <div className="window-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>

            {/* Endpoint Tabs */}
            <div className="endpoint-selector">
              <button
                onClick={() => { setSelectedEndpoint('health'); handleExecute(); }}
                className={`endpoint-btn ${selectedEndpoint === 'health' ? 'active' : ''}`}
              >
                <span className="http-method get">GET</span>
                <span>/api/v1/data-health</span>
              </button>

              <button
                onClick={() => { setSelectedEndpoint('query'); handleExecute(); }}
                className={`endpoint-btn ${selectedEndpoint === 'query' ? 'active' : ''}`}
              >
                <span className="http-method post">POST</span>
                <span>/api/v1/sql-query</span>
              </button>

              <button
                onClick={() => { setSelectedEndpoint('skills'); handleExecute(); }}
                className={`endpoint-btn ${selectedEndpoint === 'skills' ? 'active' : ''}`}
              >
                <span className="http-method get">GET</span>
                <span>/api/v1/skills-summary</span>
              </button>

              <button
                onClick={() => { setSelectedEndpoint('ai'); handleExecute(); }}
                className={`endpoint-btn ${selectedEndpoint === 'ai' ? 'active' : ''}`}
              >
                <span className="http-method post">POST</span>
                <span>/api/v1/ai-matcher</span>
              </button>
            </div>

            {/* Execute CTA */}
            <button
              onClick={handleExecute}
              disabled={loading}
              className="btn btn-primary btn-sm console-run-btn"
            >
              {loading ? <RefreshCw size={14} className="animate-spin-slow" /> : <Play size={14} />}
              <span>Execute Query</span>
            </button>
          </div>

          {/* Dynamic Payload Inputs for AI Matcher */}
          {selectedEndpoint === 'ai' && (
            <div className="console-payload-bar">
              <div className="payload-field">
                <label>Target Role:</label>
                <input
                  type="text"
                  value={roleInput}
                  onChange={(e) => setRoleInput(e.target.value)}
                  placeholder="e.g. Data Analyst"
                  className="payload-input"
                />
              </div>
              <div className="payload-field">
                <label>Tech Requirements:</label>
                <input
                  type="text"
                  value={techNeed}
                  onChange={(e) => setTechNeed(e.target.value)}
                  placeholder="e.g. Python, SQL, Excel"
                  className="payload-input"
                />
              </div>
            </div>
          )}

          {/* Console Body: JSON Output Display */}
          <div className="console-body">
            <div className="console-body-header">
              <div className="console-meta">
                <span className="status-code">HTTP 200 OK</span>
                {executionTime !== null && (
                  <span className="latency-badge">
                    <Zap size={12} />
                    <span>{executionTime} ms response time</span>
                  </span>
                )}
              </div>
              <button onClick={handleCopy} className="btn-icon-only btn-xs" title="Copy Response JSON">
                {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              </button>
            </div>

            <pre className="console-code">
              <code>{JSON.stringify(responseOutput, null, 2)}</code>
            </pre>
          </div>

          {/* Console Footer */}
          <div className="console-footer">
            <div className="console-status-left">
              <Cpu size={14} className="text-cyan" />
              <span>Engineered with Python Pandas Data Preprocessing, SQL Querying & Excel Dashboard Workflows</span>
            </div>
            <div className="console-status-right">
              <Code size={14} />
              <span>JSON Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
