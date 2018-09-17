import React, { Component } from 'react';
import Context from './Context';

class Provider extends Component {
  state = {
    lang: 'en',
  };

  setLanguage(language) {
    this.setState({ lang: language });
  }

  render() {
    return (
      <Context.Provider
        value={{ state: this.state, setLanguage: this.setLanguage }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
