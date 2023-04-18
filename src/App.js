import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookiePolicy from './components/CookiePolicy';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

// Import your framework components
import Agile from './frameworks/Agile.js';
import DevOps from './frameworks/DevOps.js';
import Dojo from './frameworks/Dojo.js';
import Kanban from './frameworks/Kanban.js';
import Lean from './frameworks/Lean.js';
import Projects from './frameworks/Projects.js';
import Scrum from './frameworks/Scrum.js';
import SixSigma from './frameworks/SixSigma.js';
import Spotify from './frameworks/Spotify.js';
import Waterfall from './frameworks/Waterfall.js';


function App() {
  return (
    <Router>
      <div className="App" 
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/cube2Image.png)`,
      }}
      >
        <Navbar />
        <Routes>
          {/* Your other routes will go here */}
          <Route path="/Agile.js" component={Agile} />
          <Route path="/DevOps" component={DevOps} />
          <Route path="/Dojo" component={Dojo} />
          <Route path="/Kanban" component={Kanban} />
          <Route path="/Lean" component={Lean} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Scrum" component={Scrum} />
          <Route path="/SixSigma" component={SixSigma} />
          <Route path="/Spotify" component={Spotify} />
          <Route path="/Waterfall" component={Waterfall} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


