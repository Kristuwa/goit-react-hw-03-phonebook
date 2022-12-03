import { Component } from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Container, TitleForm, TitleContacts } from './App.styled';
import shortid from 'shortid';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    const { contacts } = this.state;
    for (let contact of contacts) {
      if (newContact.name.toLowerCase() === contact.name.toLowerCase()) {
        alert(`${newContact.name} is already in contacts`);
        return;
      }
    }
    const id = shortid.generate();
    const newAddContact = { ...newContact, id: id };
    this.setState(prevState => {
      return {
        contacts: [newAddContact, ...prevState.contacts],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  changeFilter = filter => this.setState({ filter });

  getFilterList = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filterList = this.getFilterList();
    return (
      <Container>
        <TitleForm>Phonebook</TitleForm>
        <ContactForm onFormSubmit={this.addContact} />
        <TitleContacts>Contacts</TitleContacts>
        {filterList.length > 0 && (
          <>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              listContacts={filterList}
              handleCLick={this.deleteContact}
            />
          </>
        )}
      </Container>
    );
  }
}

export default App;
