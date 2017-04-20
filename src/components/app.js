import React, { Component } from 'react';
import Menu from './menu/menu'
import Search from './search/search';
export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Search />
        {this.props.children}
      </div>
    );
  }
}
