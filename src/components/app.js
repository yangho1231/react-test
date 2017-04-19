import React, { Component } from 'react';
import Menu from './menu/menu'
import SearchBar from './search/search';
export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <SearchBar />
        {this.props.children}
      </div>
    );
  }
}
