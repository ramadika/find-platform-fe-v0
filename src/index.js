// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import {DataProvider} from 'components/Context'

// Internals
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

// Apps
import BaseLayout from 'components/BaseLayout'
import Login from 'components/Login-Page'
import Home from 'components/Home-Page'
import Reports from 'components/Reports-Page'
import Dashboard from 'components/Dashboard-Page'
import Help from 'components/Help-Page'
import GStarted from 'components/Help-Page/GStarted-Page'
import Account from 'components/Account-Page'
import Add from 'components/Account-Page/Add-Page'
import Update from 'components/Account-Page/Update-Page'

ReactDOM.render(
  <Router>
    <DataProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <BaseLayout>
          <Route path="/home" component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/help" component={Help} />
          <Route path="/gstarted" component={GStarted} />
          <Route path="/account" component={Account} />
          <Route path="/addAccount" component={Add} />
          <Route path="/updateAccount" component={Update} />
        </BaseLayout>
      </Switch>
    </DataProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
