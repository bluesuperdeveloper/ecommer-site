import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
      	<Header />
      	<Content />
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
