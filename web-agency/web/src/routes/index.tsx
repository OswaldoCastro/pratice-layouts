import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Contact from '../pages/Contact';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={Landing} />
    <Route path="/contact" component={Contact} />
  </BrowserRouter>
);

export default Routes;
