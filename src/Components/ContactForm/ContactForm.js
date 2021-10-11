import s from "./ContactForm.module.css";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameId = uuidv4();
  numberId = uuidv4();

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, number } = this.state;
    const { resetForm } = this;
    const contact = { id: uuidv4(), name, number };
    this.props.formSubmit(contact);
    resetForm();
  };

  inputChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { handleSubmit, inputChange, nameId, numberId } = this;
    const { name, number } = this.state;
    return (
      <div className={s.formWrapper}>
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label} htmlFor={nameId}>
            Name
            <input
              id={nameId}
              className={s.input}
              value={name}
              type="text"
              name="name"
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              onChange={inputChange}
            />
          </label>

          <label className={s.label} htmlFor={numberId}>
            Number
            <input
              id={numberId}
              className={s.input}
              type="tel"
              value={number}
              name="number"
              placeholder="Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              onChange={inputChange}
            />
          </label>
          <button className={s.button}>Add contact</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,

  nameId: PropTypes.number,
  numberId: PropTypes.number,

  handleSubmit: PropTypes.func,
  formSubmit: PropTypes.func,
  inputChange: PropTypes.func,
};

export default ContactForm;
