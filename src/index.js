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
import Home from 'components/Home-Page'
import Reports from 'components/Reports-Page'
import Dashboard from 'components/Dashboard-Page'
import Help from 'components/Help-Page'
import Account from 'components/Account-Page'

ReactDOM.render(
  <Router>
    <Switch>
      <BaseLayout>
        <DataProvider>
          <Route exact path="/" component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/help" component={Help} />
          <Route path="/account" component={Account} />
        </DataProvider>
      </BaseLayout>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
