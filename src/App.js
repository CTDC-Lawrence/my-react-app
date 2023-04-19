import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import CookiePolicy from './components/cookie-policy';
import TermsOfService from './components/terms-of-service';
import PrivacyPolicy from './components/privacy-policy';
import FreeSamples from './components/free-samples/free-samples';
import FrameworkList from './components/frameworks/frameworks-list';
import About from './components/about/about';
import Services from './components/services/services-page';
import Contact from './components/contact/contact';

// Import your framework components
import Agile from './components/frameworks/agile';
import DevOps from './components/frameworks/dev-ops';
import Dojo from './components/frameworks/dojo';
import Kanban from './components/frameworks/kanban';
import Lean from './components/frameworks/lean';
import Projects from './components/frameworks/projects';
import Scrum from './components/frameworks/scrum';
import SixSigma from './components/frameworks/six-sigma';
import Spotify from './components/frameworks/spotify';
import Waterfall from './components/frameworks/waterfall';

function App() {
  return (
    <Router>
      <div className="App"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/mars.png)`,
        backgroundSize: '96%',
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Welcome to the Home page!</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/frameworks-list" element={<FrameworkList />} />
          <Route path="/free-samples" element={<FreeSamples />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/agile" element={<Agile />} />
          <Route path="/dev-ops" element={<DevOps />} />
          <Route path="/dojo" element={<Dojo />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/lean" element={<Lean />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/scrum" element={<Scrum />} />
          <Route path="/six-sigma" element={<SixSigma />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="/waterfall" element={<Waterfall/>} />
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
