import { withRouter } from 'next/router';
import React, { Component } from 'react';

class Company extends Component {
  static async getInitialProps({query}) {
    const data = await fetch(`http://headless.consumentenwebsite.nl/wp-json/wp/v2/company?slug=${query.slug}`)
    const company = await data.json();
    return {
      ...company
    }
  }
  render() {
    const company = this.props['0'];
    return(
      <div>
        <h1>{company.title.rendered}</h1>
        <p>{`id: ${company.id}`}</p>
      </div>
    )
  }
}

export default withRouter(Company);
