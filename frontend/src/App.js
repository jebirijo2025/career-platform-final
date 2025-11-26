import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Career Development Platform</h1>
        <p>Find your dream job and advance your career</p>
        
        <div className="features">
          <div className="feature-card">
            <h3>Job Search</h3>
            <p>Browse thousands of job listings</p>
          </div>
          <div className="feature-card">
            <h3>Career Resources</h3>
            <p>Resume tips, interview prep, and more</p>
          </div>
          <div className="feature-card">
            <h3>Skill Development</h3>
            <p>Courses and certifications</p>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to advance your career?</h2>
          <button className="cta-button">Get Started Today</button>
        </div>
      </header>
    </div>
  );
}

export default App;
