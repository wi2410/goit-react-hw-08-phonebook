import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { addContact } from '../../redux/contacts/contactsOperations';
import { Button, Flex, FormLabel, Text, Box, Input } from '@chakra-ui/react';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().positive().integer().required(),
});

export const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const newName = {
      createdAt: new Date(),
      name: values.name,
      number: values.number,
    };
    const newContactNameNormalized = values.name.toLowerCase();
    const findContact = contacts.find(
      contact => contact.name.toLowerCase() === newContactNameNormalized
    );
    const handleAddContact = newName => {
      Notify.success(`${values.name} has been added to your contacts`);
      dispatch(addContact(newName));
    };
    findContact
      ? Notify.warning(`${values.name} is already in contacts`)
      : handleAddContact(newName);
    actions.resetForm();
  };

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box
        minW={[300, null, 480, null]}
        minH="380px"
        boxShadow="dark-lg"
        p="5"
        borderRadius="lg"
        // bg="#0057b8"
        backgroundImage="url('https://f.hubspotusercontent00.net/hubfs/53/Sales%20Team%20Planning%20How%20to%20Sync%20iCloud%20Contacts%20with%20Outlook.jpg')"
        backgroundPosition="bottom"
        backgroundRepeat="no-repeat"
      >
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form>
            <FormLabel m="0">
              <Text display="block" py="2" fontSize={['lg', null, '3xl', null]}>
                Name
              </Text>
              <Input
                as={Field}
                variant="filled"
                size="lg"
                type="text"
                name="name"
                placeholder="Enter contact name"
                borderRadius="10"
              ></Input>
              <ErrorMessage name="name" component="span"></ErrorMessage>
            </FormLabel>
            <FormLabel m="0">
              <Text display="block" py="2" fontSize={['lg', null, '3xl', null]}>
                Number
              </Text>
              <Input
                as={Field}
                variant="filled"
                size="lg"
                type="tel"
                name="number"
                placeholder="Enter phone number"
                borderRadius="10"
              ></Input>
              <ErrorMessage name="number" component="span"></ErrorMessage>
            </FormLabel>
            <Flex justifyContent="center" mt="12">
              <Button
                variant="outline"
                colorScheme="black"
                type="submit"
                fontWeight="normal"
                bg="white"
                fontSize={['lg', null, '2xl', null]}
                _hover={{ color: '#ffd700' }}
                transition="color 250ms cubic-bezier(0.4, 0, 0.2, 1)"
                borderRadius="10"
              >
                Add contact
              </Button>
            </Flex>
          </Form>
        </Formik>
      </Box>
    </Flex>
  );
};
