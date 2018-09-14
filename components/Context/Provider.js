import React, { Component } from 'react';
import Context from './Context';

class Provider extends Component {
  state = {
    lang: 'en',
  };

  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
