import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List, Flex, Heading } from '@chakra-ui/react';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { selectFilter } from '../../redux/filter/filterSelectors';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {contacts.length > 0 ? (
        <Flex justifyContent="center" alignItems="center" py="4">
          <List maxW={[350, null, 500, null]} py="4" w="100%">
            {getVisibleContacts().map(contact => (
              <ContactListItem
                key={contact.id}
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            ))}
          </List>
        </Flex>
      ) : (
        <Heading as="h2" size="lg" textAlign="center" mt="10">
          You haven't saved contacts yet
        </Heading>
      )}
    </>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(PropTypes.shape),
  onDeleteContact: PropTypes.func,
};
