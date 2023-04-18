import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropdownMenu from './DropdownMenu/DropdownMenu';

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

function Navbar({ frameworks }) {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>CTDC</h1>
      </Link>
      <ul className="navbar-links">
        <li><Link to="/about">About</Link></li>
        <li>
          <DropdownMenu label="Services" items={services} />
        </li>
        <li>
          <DropdownMenu
            label="Frameworks"
            items={frameworks.map((framework) => ({
              label: framework.title,
              path: `/${framework.title.replace(/\s+/g, '')}`,
            }))}
          />
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