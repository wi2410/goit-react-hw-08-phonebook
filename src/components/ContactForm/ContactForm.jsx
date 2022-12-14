import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import PropTypes from 'prop-types';
import { Form, SubmitButton, FormInput } from './ContactForm.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);
      case 'phone':
        return setPhone(value);
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const uniqueEl = contacts.find(el => el.name === form.name.value);
    if (!uniqueEl) {
      dispatch(addContact({ name, phone }));
    }
    if (uniqueEl) {
      alert(`${form.name.value} is already in contacts`);
    }
    setName('');
    setPhone('');
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name
        <br />
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autocomplete="off"
        />
      </label>

      <label>
        Number
        <br />
        <FormInput
          type="tel"
          name="phone"
          value={phone}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};