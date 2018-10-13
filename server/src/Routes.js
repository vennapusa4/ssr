import React from 'react';
import Home from './client/pages/Home';
import App from './client/App';
// import HomePage from './pages/HomePage';
 import UsersList from './client/pages/usersComponent';
// import NotFoundPage from './pages/NotFoundPage';
// import AdminsListPage from './pages/AdminsListPage';
export default [
  {
    ...App,
    routes: [{
        component:Home,
        path: '/',
        exact: true
      },
      {
        ...UsersList,
        path: '/users'
      }]
  }
];


