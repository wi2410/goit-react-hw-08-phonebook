import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/contacts/contactsSelectors';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Heading } from '@chakra-ui/react';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Heading as="h2" size="xl" textAlign="center" mb="7">
        Contacts
      </Heading>
      <ContactForm></ContactForm>
      <Filter></Filter>
      {isLoading && (
        <Heading as="h2" size="xl" textAlign="center" mb="7">
          Request in progress
        </Heading>
      )}
      <ContactList></ContactList>
    </>
  );
}
