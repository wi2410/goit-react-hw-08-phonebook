import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { Heading } from '@chakra-ui/react';

export default function Register() {
  return (
    <div>
      <Heading as="h2" size="xl" textAlign="center" mb="7">
        Registration
      </Heading>
      <RegisterForm />
    </div>
  );
}
