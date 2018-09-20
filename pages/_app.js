import App, { Container } from 'next/app';
import React from 'react';
import fetch from 'isomorphic-unfetch';
import Provider from '../components/Context/Provider';
import Header from '../components/Header';
import Footer from '../components/Footer';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps)
      pageProps = await Component.getInitialProps(ctx);

    const { lang } = pageProps.pageData;

    const pagesData = await fetch(
      `http://headless.consumentenwebsite.nl/wp-json/wp/v2/pages?lang=${lang}`
    );
    const header = await fetch(
      `http://headless.consumentenwebsite.nl/wp-json/acf/v3/theme_styling/81`
    );

    
    const pages = await pagesData.json();
    const headerData = await header.json();

    return {
      header: {
        pages,
        headerData,
      },
      pageProps,
    };
  }

  render() {
    const { Component, pageProps, header } = this.props;
    return (
      <Container>
        <Provider>
          <Header {...header} />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
