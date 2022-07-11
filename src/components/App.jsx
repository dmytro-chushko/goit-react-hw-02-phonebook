import { Component } from 'react';

import ContactForm from './ContactForm';
import ContactItem from './ContactItem';
import ContactList from './ContactList';
import Filter from './Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = (id, name, number) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert('This name allready added');
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [{ id, name, number }, ...contacts],
    }));
  };

  handleDelete = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  getVisibleContacts() {
    return this.state.contacts.filter(contact =>
      contact.name.includes(this.state.filter)
    );
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <Filter onChange={this.handleChange} filter={this.state.filter} />
        <h2>Contacts</h2>
        <ContactList>
          <ContactItem
            getContacts={this.getVisibleContacts()}
            onDelete={this.handleDelete}
          />
        </ContactList>
      </div>
    );
  }
}
