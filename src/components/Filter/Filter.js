import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends Component {
  //   static propTypes = {
  //     options: PropTypes.shape({
  //       good: PropTypes.number.isRequired,
  //       neutral: PropTypes.number.isRequired,
  //       bad: PropTypes.number.isRequired,
  //     }),
  //   };
  render() {
    return (
      <label className={css.formLabel}>
        Find contacts by name
        <input
          className={css.formInput}
          type="text"
          name="filter"
          value={this.props.data.filter}
          onChange={this.props.filterChangeHandler}
          //   onFocus={this.showMessage}
          placeholder="type your query here..."
        />
      </label>
    );
  }
}

export default Filter;
