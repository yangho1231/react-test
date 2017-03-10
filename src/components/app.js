import React, { Component } from 'react';
import Navbar from './navbar.js'
import BookList from './book-list';
import BookDetails from './active-book';
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        
      </div>
    );
  }
}
