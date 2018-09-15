import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import withContext from '../components/Context/withContext';

class Index extends Component {
  static async getInitialProps(context) {
    const { lang } = context.query;
    const { wpPageRoute } = context.query;
    const homePage = await fetch(`${wpPageRoute}?slug=home`);
    let data = await homePage.json();
    let pageData = data[0];
    
    if (lang) {
      const pageLangCode = pageData.translations[`${lang}`];
      const translation = await fetch(`${wpPageRoute}/${pageLangCode}`);
      pageData = await translation.json();
    }
    return {
      pageData,
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

export default Index;
