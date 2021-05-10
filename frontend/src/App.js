import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Capitales from './views/Capitales';
import Codes from './views/Codes'
import Languse from './views/Languse'
import Pays from './views/Pays'
// import React, { useState, useEffect } from 'react';
import Country from "./views/Country";
import Nav from './views/nav'
import React from 'react'

function App() {
  return (

    <Router>
      <Nav />
      <div >
        <div>
          <Switch>
            <Route path='/capitales' component={Capitales} />
            <Route path='/codes' component={Codes} />
            <Route path='/languse' component={Languse} />
            <Route path='/pays' component={Pays} />
            <Route path='/nav' component={Nav} />
            <Route path='/' component={Country} />
          </Switch>
        </div>
      </div>
    </Router>


  );
}

export default App;