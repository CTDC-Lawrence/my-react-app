import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import DropdownMenu from './DropdownMenu/DropdownMenu';

const services = [
  { label: "Agile Coaching", path: "/agile-coaching" },
  { label: "Artificial Intelligence", path: "/artificial-intelligence" },
  { label: "Digital Automation", path: "/digital-automation" },
  { label: "Project Management", path: "/project-management" },
  { label: "Process Improvement", path: "/process-improvement" },
  { label: "Six Sigma Quality", path: "/six-sigma-quality" },
  { label: "Scrum Implementation", path: "/scrum-implementation" },
  { label: "Kanban Planning", path: "/kanban-planning" },
  { label: "Training & Curriculum", path: "/training-curriculum" },
  { label: "Content Development", path: "/content-development" },
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
        <DropdownMenu
          label="Services"
          items={services.map((service) => ({
            label: service.label,
            path: `/services/${service.label.replace(/\s+/g, '')}`,
         }))}
        />
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