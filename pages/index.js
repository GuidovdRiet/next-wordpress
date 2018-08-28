import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

class Index extends Component {
  static async getInitialProps() {
    const res = await fetch(
      `http://localhost:8888/wordpress-gatsby/wp-json/acf/v3/pages/1003`
    );
    const data = await res.json();
    return {
      data,
    };
  }

  render() {
    return (
      <div>
        <h1>Batman TV Shows</h1>
        {/* <ul>{console.log(this.props.data.acf)}</ul> */}
      </div>
    );
  }
}

export default Index;
