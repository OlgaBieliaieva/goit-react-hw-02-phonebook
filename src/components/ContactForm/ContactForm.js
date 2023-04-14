import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};
class ContactForm extends Component {
  //   static propTypes = {
  //     options: PropTypes.shape({
  //       good: PropTypes.number.isRequired,
  //       neutral: PropTypes.number.isRequired,
  //       bad: PropTypes.number.isRequired,
  //     }),
  //   };

  //   handleChangeName = e => {
  //     console.log(e.target.value);
  //   };
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault(e);
    this.props.addContact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form className={css.contactForm} onSubmit={this.handleSubmit}>
        <label className={css.formLabel}>
          Name
          <input
            className={css.formInput}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="type name here..."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.formLabel}>
          Number
          <input
            className={css.formInput}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            placeholder="type number here..."
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
