import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropdownMenu from './DropdownMenu/DropdownMenu';

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
].sort((a, b) => a.title.localeCompare(b.title));

const services = [
  { label: "Agile Coaching", path: "/service-1" },
  { label: "Artificial Intelligence", path: "/service-2" },
  { label: "Digital Automation", path: "/service-3" },
  { label: "Project Management", path: "/service-4" },
  { label: "Process Improvement", path: "/service-5" },
  { label: "Six Sigma Quality", path: "/service-6" },
  { label: "Scrum Implementation", path: "/service-7" },
  { label: "Kanban Planning", path: "/service-8" },
  { label: "Training & Curriculum", path: "/service-9" },
  { label: "Content Development", path: "/service-10" },
  // Add more service objects here
];

const freeSamples = [
  { label: "Sample 1", path: "/sample-1" },
  { label: "Sample 2", path: "/sample-2" },
  { label: "Sample 3", path: "/sample-3" },
  { label: "Sample 4", path: "/sample-4" },
  { label: "Sample 5", path: "/sample-5" },
  { label: "Sample 6", path: "/sample-6" },
  { label: "Sample 7", path: "/sample-7" },
  { label: "Sample 8", path: "/sample-8" },
  { label: "Sample 9", path: "/sample-9" },
  { label: "Sample 10", path: "/sample-10" },
  // Add more sample objects here
];

const contactOptions = [
  { label: "Email", path: "/email" },
  { label: "Phone", path: "/phone" },
  // Add more contact objects here
];

function Navbar() {
  return (
    <nav className="navbar">
      <h1>CTDC</h1>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>
          <DropdownMenu label="Services" items={services} />
        </li>
        <li>
          <DropdownMenu label="Frameworks" items={images.map((image) => ({ label: image.title, path: `/${image.title.toLowerCase()}` }))} />
        </li>
        <li>
          <DropdownMenu label="Free Samples" items={freeSamples} />
        </li>
        <li>
          <DropdownMenu label="Contact" items={contactOptions} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


