import React, { Component, Fragment } from 'react';

import AppHeader from './header/AppHeader';
import UserList from './components/UserList';

class App extends Component{

 render() {
   return (
     <Fragment>
       <AppHeader />
       <div className="container">
         
       </div>
      <div className="container">
        <UserList />
      </div>
    </Fragment>
   );
 }
};

export default App;
