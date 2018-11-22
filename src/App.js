import React, { Component } from 'react';
import Main from './Main';
import SearchAppBar from './SearchAppBar';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <div>
        <SearchAppBar />
        <Main/>
      </div>
    );
  }
}

export default App;