import App, { Container } from 'next/app';
import React from 'react';
import fetch from 'isomorphic-unfetch'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps)
      pageProps = await Component.getInitialProps(ctx);
    const menu = await fetch(
      `http://localhost:8888/wordpress-gatsby/wp-json/wp-api-menus/v2/menus/77`
    );
    const header = await fetch(
      `http://localhost:8888/wordpress-gatsby/wp-json/acf/v3/theme_styling/866`);
    const navItems = await menu.json();
    const headerData = await header.json();

    return {
      header: {
        navigation: navItems.items,
        headerData
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
