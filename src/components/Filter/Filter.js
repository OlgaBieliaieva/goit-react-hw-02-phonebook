import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    filterChangeHandler: PropTypes.func.isRequired,
  };

  render() {
    return (
      <label className={css.formLabel}>
        Find contacts by name
        <input
          className={css.formInput}
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.filterChangeHandler}
          placeholder="type your query here..."
        />
      </label>
    );
  }
}

export default Filter;
