import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

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
                <button
                  className={css.listItemBtn}
                  id={id}
                  type="button"
                  onClick={this.props.onDeleteContact}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default ContactList;
