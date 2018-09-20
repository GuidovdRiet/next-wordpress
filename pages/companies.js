import React, { Component } from 'react';
import styled from 'styled-components';
import CompanyCard from '../components/Companies/CompanyCard';

class Companies extends Component {
  static async getInitialProps(context) {
    const { lang } = context.query;
    const data = await fetch(
      'http://headless.consumentenwebsite.nl/wp-json/wp/v2/company'
    );
    const companies = await data.json();

    const pageData = {
      companies,
      lang,
    };

    return {
      pageData,
    };
  }

  renderCompanies() {
    const { companies } = this.props.pageData;
    return companies.map(company => (
      <CompanyCard key={company.id} company={company} />
    ));
  }

  render() {
    return (
      <Container>
        <CompanyCardsWrapper>{this.renderCompanies()}</CompanyCardsWrapper>
      </Container>
    );
  }
}

export default Companies;

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const CompanyCardsWrapper = styled.div`
  width: 90%;
  max-width: 1130px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
`;
