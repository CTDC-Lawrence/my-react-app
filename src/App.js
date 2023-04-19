import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookiePolicy from './components/CookiePolicy';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import About from './components/About/About';
import { Frameworks } from "./data/Frameworks";

// Import your framework components
import Agile from './components/Frameworks/Agile';
import DevOps from './components/Frameworks/DevOps';
import Dojo from './components/Frameworks/Dojo';
import Kanban from './components/Frameworks/Kanban';
import Lean from './components/Frameworks/Lean';
import Projects from './components/Frameworks/Projects';
import Scrum from './components/Frameworks/Scrum';
import SixSigma from './components/Frameworks/SixSigma';
import Spotify from './components/Frameworks/Spotify';
import Waterfall from './components/Frameworks/Waterfall';


function App() {
  return (
    <Router>
      <div className="App"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/mars.png)`,
        backgroundSize: '96%',
      }}>
        <Navbar Frameworks={Frameworks} />
        <Routes>
          <Route path="/" element={<h1>Welcome to the Home page!</h1>} />
          <Route path="/about" element={<About />} />
          {/* Your other routes will go here */}
          <Route path="/Agile" element={<Agile />} />
          <Route path="/DevOps" element={<DevOps />} />
          <Route path="/Dojo" element={<Dojo />} />
          <Route path="/Kanban" element={<Kanban />} />
          <Route path="/Lean" element={<Lean />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Scrum" element={<Scrum />} />
          <Route path="/SixSigma" element={<SixSigma />} />
          <Route path="/Spotify" element={<Spotify />} />
          <Route path="/Waterfall" element={<Waterfall />} />
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
