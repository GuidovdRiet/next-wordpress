import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

class Index extends Component {
  static async getInitialProps(context) {
    const { lang, wpPageRoute } = context.query;
    const homePage = await fetch(`${wpPageRoute}?slug=home`);
    let data = await homePage.json();

    if (lang !== 'nl') {
      const pageLangCode = data[0].translations[`${lang}`];
      const translation = await fetch(`${wpPageRoute}/${pageLangCode}`);
      data = await translation.json();
    }

    const pageData = {
      data,
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
