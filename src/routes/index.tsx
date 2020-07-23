import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Projects from '../pages/Projects';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/projects" component={Projects} />
    <Route path="/about-me" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Routes;
