import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { FilterInput, Label } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Label>
        Find contacts by name <br />
        <FilterInput
          type="text"
          onChange={e => dispatch(filterContacts(e.currentTarget.value))}
        />
      </Label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onFilter: PropTypes.func,
};