import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';

class Index extends Component {
  static async getInitialProps(context) {
    const { lang, pagesEndpoint, defaultLang } = context.query;
    const data = await fetch(`${pagesEndpoint}?slug=home`);
    let homePageData = await data.json();
    let isPage = true;

    if (lang !== defaultLang) {
      const pageLangCode = homePageData[0].translations[`${lang}`];
      const translation = await fetch(`${pagesEndpoint}/${pageLangCode}`);
      homePageData = await translation.json();
    }

    // TODO: if the lang is not included in the languages available 404
    // if (lang !== defaultLang) {
    //   isPage = false;
    // }

    const pageData = {
      homePageData,
      lang,
      isPage,
    };

    return {
      pageData,
    };
  }

  render() {
    const { isPage } = this.props.pageData;
    if (!isPage) {
      return <Error statusCode="404" />;
    }
    return (
      <div>
        <h1>Demo Next.js | WP</h1>
      </div>
    );
  }
}

export default Index;
