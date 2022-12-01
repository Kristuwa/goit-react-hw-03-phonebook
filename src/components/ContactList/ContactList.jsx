import ContactItem from '../ContactItem';
import { ContactsList } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ listContacts, handleCLick }) => {
  return (
    <ContactsList>
      {listContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            handleCLick={handleCLick}
          />
        );
      })}
    </ContactsList>
  );
};

ContactList.propTypes = {
  listContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleCLick: PropTypes.func.isRequired,
};

export default ContactList;
