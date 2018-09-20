import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

class Header extends Component {
  renderNavigationMenu() {
    const { pages } = this.props;
    // TODO: Add current language from state
    return pages.map(page => (
      <Link
        prefetch
        key={page.id}
        as={`/${page.slug}`}
        href={`/${page.slug}?lang=nl`}
      >
        <a>{page.title.rendered}</a>
      </Link>
    ));
  }

  render() {
    const { background, logo } = this.props.headerData.acf;
    return (
      <Wrapper background={background}>
        <Logo logo={logo} />
        {this.renderNavigationMenu()}
      </Wrapper>
    );
  }
}

export default Header;

const Wrapper = styled.div`
  background: ${props => props.background};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  margin-bottom: 40px;
  & > a {
    color: rgba(68, 69, 69, 0.6);
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: rgba(68, 69, 69, 1);
    }
  }
`;

const Logo = styled.div`
  background: url(${props => props.logo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
`;
