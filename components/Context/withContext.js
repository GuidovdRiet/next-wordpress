import React from 'react';
import Context from './Context';

const withContext = Component => {
  return class extends React.Component {
    render() {
      return (
        <Context.Consumer>{value => <Component {...value} />}</Context.Consumer>
      );
    }
  };
};

export default withContext;
