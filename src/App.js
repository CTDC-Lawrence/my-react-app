import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel/Carousel';
import CookiePolicy from './components/CookiePolicy';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

const images = [
  {
    url: 'images/agile.png',
    alt: 'Agilists Planning',
    title: 'Agile',
    description: 'Agilists breakdown complex.',
  },
  {
    url: 'images/devops.png',
    alt: 'Developers & Ops working togetherg',
    title: 'DevOps',
    description: 'Agilists breakdown complex tasks.',
  },
  {
    url: 'images/dojo.png',
    alt: 'Pair Programming as a dojo',
    title: 'Dojo',
    description: 'Dojos work in pairs and really chop wood!',
  },
  {
    url: 'images/scrum.png',
    alt: 'Scrum Team huddling',
    title: 'Scrum',
    description: 'Agilists breakdown complex task.',
  },
  {
    url: 'images/lean.png',
    alt: 'Manufactuing converyor belt',
    title: 'Lean',
    description: 'Lean teams continuously improve.',
  },
  {
    url: 'images/kanban.png',
    alt: 'Kanban Board to do list',
    title: 'Kanban',
    description: 'Agilists breakdown complex tas',
  },
  {
    url: 'images/projects.png',
    alt: 'Projects',
    title: 'Projects',
    description: 'Agilists breakdown comple.',
  },
  {
    url: 'images/sixsigma.png',
    alt: 'Space Shuttle',
    title: 'Six Sigma',
    description: 'Dojos work in pairs and really chop wood!',
  },
  {
    url: 'images/spotify.png',
    alt: 'Spotify',
    title: 'Spotify',
    description: 'Agilists breakdown complex tasks.',
  },
  {
    url: 'images/waterfall.png',
    alt: 'Waterfall',
    title: 'Waterfall',
    description: 'Lean teams continuously improve.',
  },
  // Add more image objects here
];

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
          <Route path="/" element={<Carousel images={images} />} />
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

