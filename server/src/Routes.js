import React from 'react';
import Home from './client/components/Home';
// import HomePage from './pages/HomePage';
 import UsersList,{loadData} from './client/components/usersComponent';
// import NotFoundPage from './pages/NotFoundPage';
// import AdminsListPage from './pages/AdminsListPage';

export default [
     {
        component:Home,
        path: '/',
        exact: true
      },
      {
        loadData,
        component:UsersList,
        path: '/users'
      }
     
  
];


