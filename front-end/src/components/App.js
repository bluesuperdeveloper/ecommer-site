import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import Content from '../components/Content';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
      	<Header />
      	<Content />
      </div>
    </Router>
    );
  }
}

export default App;
