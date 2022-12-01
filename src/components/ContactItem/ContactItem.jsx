import { Item, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, handleCLick }) => {
  return (
    <Item>
      <p>
        {name}: <span>{number}</span>
      </p>
      <Button type="button" onClick={() => handleCLick(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleCLick: PropTypes.func.isRequired,
};

export default ContactItem;
