import React, { Component } from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link';

class CompanyCard extends Component {
  constructor(props) {
    super();
    this.state = {
      coverPhoto: props.company['post-meta-fields'].covers[0].split(',')[0],
    };
  }

  render() {
    const { company } = this.props;
    const companyTitle = ReactHtmlParser(company.title.rendered);

    return (
      <Link
        as={`/posts/${company.slug}`}
        href={`post?id=${company.id}`}
      >
        <Card background={this.state.coverPhoto}>
          <h1>{companyTitle}</h1>
        </Card>
      </Link>
    );
  }
}

export default CompanyCard;

const Card = styled.div`
  background: url(${props => props.background});
  background-size: cover;
  flex-grow: 1;
  min-width: 25%;
  height: 400px;
  margin: 10px;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
  & > h1 {
    color: #fff;
    margin: 0;
  }
`;
