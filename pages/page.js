import React, { Component } from 'react';
import About from '../components/pages/About';
import Chainels from '../components/pages/Chainels';

class Page extends Component {
  static async getInitialProps(context) {
    const { lang, slug, pagesEndpoint } = context.query;
    const data = await fetch(`${pagesEndpoint}?slug=${slug}`);
    const page = await data.json();

    const pageData = {
      ...page,
      lang,
    };

    return {
      pageData,
    };
  }

  render() {
    const page = this.props.pageData['0'];
    const { slug } = page;
    const pages = {
      about: <About {...page} />,
      chainels: <Chainels {...page} />,
    };
    return pages[`${slug}`];
  }
}

export default Page;
