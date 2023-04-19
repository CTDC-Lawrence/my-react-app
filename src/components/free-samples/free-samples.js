import React from 'react';
import freeSamplesData from '../../data/free-samples';

const FreeSamples = () => {
  return (
    <div>
      <h2>Free Samples</h2>
      <ul>
        {freeSamplesData.map((sample) => (
          <li key={sample.id}>
            <a href={sample.url} target="_blank" rel="noreferrer">
              {sample.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreeSamples;
