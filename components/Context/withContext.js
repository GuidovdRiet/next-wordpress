import React from 'react';
import Context from './Context';

const withContext = Component => {
  return class extends React.Component {
    static getInitialProps(ctx) {
      if (Component.getInitialProps) return Component.getInitialProps(ctx);
    }
    render() {
      return (
        <Context.Consumer>{state => <Component {...state} />}</Context.Consumer>
      );
    }
  };
};

export default withContext;
