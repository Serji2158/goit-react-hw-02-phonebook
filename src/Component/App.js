import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import ContactForm from "./contactForm/ContactForm";

class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: "Rosie Simpson", number: "459-12-56" },
      { id: uuidv4(), name: "Hermione Kline", number: "443-89-12" },
      { id: uuidv4(), name: "Eden Clements", number: "645-17-79" },
      { id: uuidv4(), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addNewContact = (newContact) => {
    this.setState((prev) => {
      return { contacts: [...prev.contacts, { id: uuidv4(), ...newContact }] };
    });
  };

  isExistContact = (name) =>
    this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

  deletContact = (e) => {
    const id = e.target.id;
    this.setState((prev) => ({
      contacts: [...prev.contacts.filter((contact) => contact.id !== id)],
    }));
  };

  onHandleChangeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normolizedFilter = filter.toLowerCase();

    return normolizedFilter
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normolizedFilter)
        )
      : contacts;
  };

  render() {
    const filteredContacts = this.getVisibleContacts();
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm
            isExistContact={this.isExistContact}
            addNewContact={this.addNewContact}
          />
          <h2>Contacts</h2>
          <Filter
            value={this.state.filter}
            onChange={this.onHandleChangeFilter}
          />
          <ContactList
            contacts={filteredContacts}
            deletContact={this.deletContact}
          />
        </div>
      </>
    );
  }
}

export default App;
