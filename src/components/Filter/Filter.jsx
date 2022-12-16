import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { changeFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/filterSelectors';
import { FormLabel, Text, Input, Flex, Box } from '@chakra-ui/react';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Flex justifyContent="center">
      <Box minW={[300, null, 480, null]} m="0">
        <FormLabel m="0">
          <Text py="12" fontSize="3xl" textAlign="center" fontWeight="bold">
            Find contacts by name
          </Text>
          <Input
            variant="filled"
            size="lg"
            placeholder="Find your contact"
            type="text"
            name="filter"
            value={filter}
            onChange={e => dispatch(changeFilter(e.currentTarget.value))}
          ></Input>
        </FormLabel>
      </Box>
    </Flex>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func,
};
