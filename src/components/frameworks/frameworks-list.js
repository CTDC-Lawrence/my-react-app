import React from 'react';
import { Link } from 'react-router-dom';
import './frameworks-list.css';
import Frameworks from '../../data/frameworks-list';

const FrameworkList = () => {
  return (
    <div>
      <h2>Frameworks</h2>
      <ul>
        {Frameworks.map((framework, index) => (
          <li key={index}>
            <Link to={framework.website}>
              <img src={framework.url} alt={framework.alt} />
              <div className="framework-info">
                <h3>{framework.title}</h3>
                <p>{framework.description}</p>
                <p>Twitter: <a href={framework.twitterHandle}>{framework.twitterHandle}</a></p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrameworkList;
