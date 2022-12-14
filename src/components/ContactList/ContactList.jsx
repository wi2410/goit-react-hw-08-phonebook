import ContactItem from '../ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilterInput, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

const handleFilterChange = (contacts, filter) => {
  if (filter) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return contacts;
};

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterInput);
  const filtredContacts = handleFilterChange(contacts, filterValue.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {!isLoading &&
        filtredContacts.map(contact => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactList;