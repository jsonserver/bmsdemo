import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ContentDetail from './ContentDetail';
import Content from './Content';
import SearchAppBar from './SearchAppBar';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <div>
        <SearchAppBar />
        <Switch>
          <Route exact path="/" component={Content} />
          <Route path="/items/:id" component={ContentDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;