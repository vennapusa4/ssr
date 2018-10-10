import React from 'react';
import Home from './client/components/Home';
import  { Route } from 'react-router-dom';

const Routes = () => (
     <div>
         <Route exact path="/" component={Home}/>
         <Route exact path="/App" component={Home}/>
    </div>
   );
   export default Routes;


