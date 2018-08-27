import React, { Component } from 'react';
import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header';

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
      <Layout>
        <h1>Batman TV Shows</h1>
        <ul>{console.log(this.props.data.acf)}</ul>
      </Layout>
    );
  }
}

export default Index;
