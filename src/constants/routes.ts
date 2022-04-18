import React from 'react';
import HomePage from '../pages/HomePage';

const ErrorPage = React.lazy(() => import('../pages/ErrorPage'));

const routes = [
  {
    path: '/home',
    component: HomePage,
    exact: false,
  },
  {
    path: '/error',
    component: ErrorPage,
    exact: true,
  },
];

export default routes;
