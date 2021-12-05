import React, { Component } from "react";
import shortid from "shortid";

import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [],
  };

  addName = (name) => {
    console.log(name);
    const newName = {
      id: shortid.generate(),
      name,
    };
    this.setState(() => ({
      contacts: [newName, ...this.state.contacts],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addName} />
        <h2>Contacts </h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
