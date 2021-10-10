import s from "./ContactForm.module.css";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    agree: false,
  };

  nameId = uuidv4();
  numberId = uuidv4();
  agreeId = uuidv4();

  handleSubmit = (evt) => {
    const { name, number } = this.state;
    evt.preventDefault();
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    this.props.formSubmit(contact);
    this.resetForm();
  };

  inputChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  agreeChange = (evt) => {
    this.setState({ agree: evt.target.checked });
  };

  resetForm = () => {
    this.setState({ name: "", number: "", agree: false });
  };

  render() {
    const {
      handleSubmit,
      inputChange,
      agreeChange,
      nameId,
      numberId,
      agreeId,
    } = this;
    const { name, number, agree } = this.state;
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
              placeholder="Enter name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
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
              placeholder="Enter number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={inputChange}
            />
          </label>
          <label className={s.label} htmlFor={agreeId}>
            <input
              id={agreeId}
              className={s.checkbox}
              value={agree}
              type="checkbox"
              name="agree"
              checked={agree}
              onChange={agreeChange}
            />
            Agree
          </label>

          <button className={s.button} disabled={!agree}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  agree: PropTypes.bool,
  nameId: PropTypes.number,
  numberId: PropTypes.number,
  agreeId: PropTypes.number,
  handleSubmit: PropTypes.func,
  formSubmit: PropTypes.func,
  inputChange: PropTypes.func,
  agreeChange: PropTypes.func,
};

export default ContactForm;
