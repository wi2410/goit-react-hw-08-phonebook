import { Heading } from '@chakra-ui/react';
import { LoginForm } from '../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <Heading as="h2" size="xl" textAlign="center" mb="7">
        Login
      </Heading>
      <LoginForm></LoginForm>
    </div>
  );
}
