import React from 'react';
import { Route } from 'react-router-dom';
import About from './components/About/About';

const AboutRoutes = () => {
  return (
    <Route path="/about">
      <About />
    </Route>
  );
};

export default AboutRoutes;
