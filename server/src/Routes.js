import React from 'react';
import Home from './client/components/Home';
import UsersList from './client/components/usersComponent';
import  { Route } from 'react-router-dom';

const Routes = () => (
     <div>
         <Route exact path="/" component={Home}/>
         <Route exact path="/Users" component={UsersList}/>
    </div>
   );
   export default Routes;


