import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookiePolicy from './components/CookiePolicy';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import { CustomCarousel as Carousel } from './components/Carousel/CustomCarousel';
import { frameworks } from "./data/frameworks";

// Import your framework components
import Agile from './components/frameworks/Agile';
import DevOps from './components/frameworks/DevOps';
import Dojo from './components/frameworks/Dojo';
import Kanban from './components/frameworks/Kanban';
import Lean from './components/frameworks/Lean';
import Projects from './components/frameworks/Projects';
import Scrum from './components/frameworks/Scrum';
import SixSigma from './components/frameworks/SixSigma';
import Spotify from './components/frameworks/Spotify';
import Waterfall from './components/frameworks/Waterfall';


function App() {
  return (
    <Router>
      <div className="App"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/mars.png)`,
        backgroundSize: '96%',
      }}>
        <Navbar frameworks={frameworks} />
        <Routes>
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
        <Carousel
          images={frameworks.map((framework) => framework.url)}
          titles={frameworks.map((framework) => framework.title)}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;