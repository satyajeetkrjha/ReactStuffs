import React, { Component } from 'react';
import ContactList from './features/contact-list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
       <h1>Contacts </h1>
        <ContactList/>
      </div>
    );
  }
}

export default App;
