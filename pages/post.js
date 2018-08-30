import { withRouter } from 'next/router';
import React, { Component } from 'react';

class Post extends Component {
  static async getInitialProps({query}) {
    return {
      ...query
    }
  }
  render() {
    return <h1>{}</h1>
  }
}

export default withRouter(Post);
