import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Context from '../components/Context/Context';

class Index extends Component {
  static async getInitialProps() {
    const res = await fetch(
      `http://headless.consumentenwebsite.nl/wp-json/acf/v3/pages/1003`
    );
    const data = await res.json();
    return {
      data,
    };
  }

  render() {
    return (
      <div>
        <Context.Consumer>
          {value => (
            <div>
              <h1>Demo Next.js | WP</h1>
              <ul>{console.log(value.state)}</ul>
            </div>
          )}
        </Context.Consumer>
      </div>
    );
  }
}

export default Index;
