import { nanoid } from 'nanoid';
import { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputNameId = nanoid();
  inputNumberId = nanoid();

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const name = this.state.name;
    const number = this.state.number;

    this.props.onSubmit(id, name, number);
    this.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.inputId}>Name</label>
        <input
          id={this.inputId}
          type="text"
          value={this.state.name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />
        <label htmlFor={this.inputNumberId}>Number</label>
        <input
          id={this.inputNumberId}
          type="tel"
          value={this.state.number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
