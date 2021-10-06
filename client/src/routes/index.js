import React from 'react';
import Login from '../pages/Login';
import { Switch } from 'react-router-dom';
import MyRoute from './MyRoute';
import Page404 from '../pages/Page404';

const Routes = () => {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} isClosed />
      <MyRoute exact path="/login" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
};

export default Routes;
