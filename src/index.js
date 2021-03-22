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
import DataList from 'components/DataList-Page'
import Summary from 'components/Summary-Page'

ReactDOM.render(
  <Router>
    <Switch>
      <BaseLayout>
        <DataProvider>
          <Route exact path="/" component={Home} />
          <Route path="/datalist" component={DataList} />
          <Route path="/summary" component={Summary} />
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
