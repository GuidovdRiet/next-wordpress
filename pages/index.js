import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import withContext from '../components/Context/withContext';

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
        <h1>Demo Next.js | WP</h1>
      </div>
    );
  }
}

export default withContext(Index);
