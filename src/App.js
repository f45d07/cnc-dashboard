import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  browserHistory,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import Home from './Home';
import Machines from './Machines';
import PageError from './PageError';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/machine/:MachineId" component={Machines} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={PageError} />
      </Switch>
    </Router>
  );
}

export default App;
