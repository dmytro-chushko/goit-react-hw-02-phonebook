import { Component } from 'react';

import ContactForm from './ContactForm';

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
    this.setState(({ contacts }) => ({
      contacts: [{ id, name, number }, ...contacts],
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
        <label htmlFor={this.inputFilterId}>Find contacts by name</label>
        <input
          id={this.inputFilterId}
          type="text"
          value={this.state.filter}
          name="filter"
          onChange={this.handleChange}
        />
        <h2>Contacts</h2>
        <ul>
          {this.getVisibleContacts().map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
