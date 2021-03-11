import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './App'
import Dashboard from './Dashboard'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;