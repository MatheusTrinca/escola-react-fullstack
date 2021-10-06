import React from 'react';
import Login from '../pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Page404 from '../pages/Page404';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route path="*" component={Page404} />
    </Switch>
  );
};

export default Routes;
