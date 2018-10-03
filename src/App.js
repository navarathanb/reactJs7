import React, { Component } from 'react';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header/>
        <Content />
        <Footer />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div className = "header">
        <h2>Header Content</h2>
      </div>
    )
  }
}
class Content extends React.Component {
  render() {
    return (
      <div className = "content">
        <h2>Content Section</h2>
      </div>
    )
  }
}
class Footer extends React.Component {
  render(){
    return(
      <div className="footer">
        <h2>Footer Content</h2>
      </div>
    )
  }
}


export default App;
