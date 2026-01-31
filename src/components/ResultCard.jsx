import React from 'react';
import './ResultCard.css';

const ResultCard = ({ result }) => {
  const { year, totalCandidates, divisions, highlight } = result;
  const passRate = ((divisions.div1 + divisions.div2 + divisions.div3 + divisions.div4) / totalCandidates * 100).toFixed(1);

  return (
    <div className="result-card">
      <div className="result-year">{year}</div>
      <div className="result-total">
        <span className="total-number">{totalCandidates}</span>
        <span className="total-label">Candidates</span>
      </div>
      
      <div className="result-divisions">
        <div className="division-item div1">
          <span className="div-label">Div I</span>
          <span className="div-count">{divisions.div1}</span>
        </div>
        <div className="division-item div2">
          <span className="div-label">Div II</span>
          <span className="div-count">{divisions.div2}</span>
        </div>
        <div className="division-item div3">
          <span className="div-label">Div III</span>
          <span className="div-count">{divisions.div3}</span>
        </div>
        <div className="division-item div4">
          <span className="div-label">Div IV</span>
          <span className="div-count">{divisions.div4}</span>
        </div>
      </div>

      <div className="result-highlight">
        <span className="highlight-icon">⭐</span>
        <p>{highlight}</p>
      </div>

      <div className="result-footer">
        <span className="pass-rate">{passRate}% Pass Rate</span>
      </div>
    </div>
  );
};

export default ResultCard;
