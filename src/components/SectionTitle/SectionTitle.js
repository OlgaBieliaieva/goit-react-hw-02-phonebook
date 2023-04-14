import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SectionTitle extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    return (
      <>
        <h2>{this.props.text}</h2>
      </>
    );
  }
}

export default SectionTitle;
