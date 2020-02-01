import React, { Component } from 'react';
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
import Header from './Header';
import Footer from './Footer';
import Docs from './Docs';
import Doc from './Doc';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    let current_lang = 'ru';
    if(localStorage.current_lang !== undefined) {
      current_lang = localStorage.current_lang;
    }
    this.state = { 
      current_lang: current_lang,
      client_id: Math.round(Math.random() * 1000000000)
    };
  }
  UpdateCurrentLang = (lang) => {
    this.setState({ current_lang: lang })
  }
  render() {
    return (
      <div>
        <div className="main">
          <header id="header">
            <Header current_lang={this.state.current_lang} UpdateCurrentLang={this.UpdateCurrentLang} />
          </header>
          <div id="root">
            <Router>
              <Switch>
                <Route path="/machine/:MachineId" component={(match) => <Machines match={match} client_id={this.state.client_id} current_lang={this.state.current_lang} />} />
                <Route path="/docs" component={() => <Docs current_lang={this.state.current_lang} />} />
                <Route path="/doc/:DocId" component={() => <Doc current_lang={this.state.current_lang} />} />
                <Route exact path="/" component={() => <Home current_lang={this.state.current_lang} />} />
                <Route path="*" component={() => <PageError current_lang={this.state.current_lang} />} />
              </Switch>
            </Router>
          </div>
        </div>
        <div id="footer" className="footer">
          <Footer current_lang={this.state.current_lang} />
        </div>
      </div>
    );
  }
}

export default App;
