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
    const menu = await fetch(
      `http://headless.consumentenwebsite.nl/wp-json/wp-api-menus/v2/menus/68`
    );
    const header = await fetch(
      `http://headless.consumentenwebsite.nl/wp-json/acf/v3/theme_styling/81`
    );
    const navItems = await menu.json();
    const headerData = await header.json();

    return {
      header: {
        navigation: navItems.items,
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
