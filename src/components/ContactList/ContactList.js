import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './ContactList.module.css';

class ContactList extends Component {
  //   static propTypes = {
  //     options: PropTypes.shape({
  //       good: PropTypes.number.isRequired,
  //       neutral: PropTypes.number.isRequired,
  //       bad: PropTypes.number.isRequired,
  //     }),
  //   };

  render() {
    return (
      <ul className={css.contactList}>
        {this.props.contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(this.props.query.toLowerCase())
          )
          .map(({ id, name, number }) => {
            return (
              <li className={css.contactItem} key={id}>
                {name}: {number}
              </li>
            );
          })}
      </ul>
    );
  }
}

export default ContactList;
