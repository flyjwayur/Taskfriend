import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing.js';
import Kanban from './components/Kanban';
import TodoList from './components/TodoList';
import SignUp from './components/SignUp';
import Notfound from './components/NotFound/NotFound';

import Footer from './components/layout/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/kanban" component={Kanban} />
          <Route path="/brainstorm" component={Landing} />
          <Route path="/yourday" component={TodoList} />
          <Route path="/signUp" component={SignUp} />
          <Route component={Notfound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
