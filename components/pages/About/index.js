import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <h1>{this.props.title.rendered}</h1>
    )
  }
}

export default About;
