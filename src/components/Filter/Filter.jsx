import { Input, Label } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <Label htmlFor="filter">
    Find contacts by name:
    <Input
      name="filter"
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
