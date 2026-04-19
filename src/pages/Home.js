import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import '../styles/pages/Home.css';

function Home() {
  return (
    <div className="home-page">
      <Navigation />
      <div className="home-container">
        <div className="home-content">
          <h1>🚀 AKN AI</h1>
          <p className="tagline">Build apps by just describing them</p>
          <p className="subtitle">
            Your personal AI developer that can chat, build, and run applications
          </p>
          <div className="home-buttons">
            <Link to="/signup" className="btn btn-primary">
              Start Building
            </Link>
            <Link to="/login" className="btn btn-secondary">
              Sign In
            </Link>
          </div>
        </div>
        <div className="features-preview">
          <div className="feature">
            <span className="feature-icon">💬</span>
            <h3>AI Chat</h3>
            <p>Chat with AI like Claude</p>
          </div>
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <h3>Code Generation</h3>
            <p>Generate code from prompts</p>
          </div>
          <div className="feature">
            <span className="feature-icon">▶️</span>
            <h3>Code Execution</h3>
            <p>Run code instantly</p>
          </div>
          <div className="feature">
            <span className="feature-icon">💾</span>
            <h3>Save Projects</h3>
            <p>Save and load your work</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;