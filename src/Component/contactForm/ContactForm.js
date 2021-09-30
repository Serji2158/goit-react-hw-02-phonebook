import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./contactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  onHandleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    if (this.props.isExistContact(this.state.name)) {
      alert(`${this.state.name} is already exist`);
    } else {
      this.props.addNewContact(this.state);
    }

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={s.contactForm} onSubmit={this.onHandleSubmit}>
        <label>
          <p className={s.inputName}>Name:</p>
          <input
            className={s.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onHandleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          <p className={s.inputName}>Number:</p>
          <input
            className={s.input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.onHandleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <div className={s.contactForm__btn}>
          <button className={s.btn} type="submit">
            Add Contact
          </button>
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
