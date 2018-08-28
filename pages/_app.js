import App, { Container } from 'next/app';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps)
      pageProps = await Component.getInitialProps(ctx);
    const res = await fetch(
      `http://localhost:8888/wordpress-gatsby/wp-json/wp-api-menus/v2/menus/77`
    );
    const navItems = await res.json();
    return {
      header: {
        navigation: navItems.items,
      },
      pageProps,
    };
  }

  render() {
    const { Component, pageProps, header } = this.props;
    return (
      <Container>
        <Header {...header} />
        <Component {...pageProps} />
        <Footer />
      </Container>
    );
  }
}
