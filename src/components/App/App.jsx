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

  addContact = newContact => {
    const { contacts } = this.state;
    const id = shortid.generate();
    const newAddContact = { ...newContact, id: id };
    for (let contact of contacts) {
      if (newAddContact.name.toLowerCase() === contact.name.toLowerCase()) {
        alert(`${newAddContact.name} is already in contacts`);
        return;
      }
    }
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
    const { contacts, filter } = this.state;
    const filterList = this.getFilterList();
    return (
      <Container>
        <TitleForm>Phonebook</TitleForm>
        <ContactForm contacts={contacts} onFormSubmit={this.addContact} />
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
