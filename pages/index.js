import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import withContext from '../components/Context/withContext';

class Index extends Component {
  static async getInitialProps(context) {
    const { lang, pagesEndpoint } = context.query;
    const data = await fetch(`${pagesEndpoint}?slug=home`);
    let homePageData = await data.json();

    if (lang !== 'nl') {
      const pageLangCode = homePageData[0].translations[`${lang}`];
      const translation = await fetch(`${pagesEndpoint}/${pageLangCode}`);
      homePageData = await translation.json();
    }

    const pageData = {
      homePageData,
      lang,
    };

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
