import React, { Component } from "react";
import shortid from "shortid";

class ContactForm extends Component {
  state = { name: "", number: "" };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleNameChange = (e) => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  handleNumberChange = (e) => {
    this.setState({
      number: e.currentTarget.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className="Phonebook" onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputId}
          />
        </label>
        <button type="submit">Add contact</button>

        <label htmlFor={this.numberInputId}>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleNumberChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberInputId}
          />
        </label>
        <button type="submit">Add number</button>
      </form>
    );
  }
}

export default ContactForm;
