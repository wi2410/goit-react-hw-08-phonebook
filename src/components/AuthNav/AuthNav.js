import { NavLink } from 'react-router-dom';
import { Link, Flex, Text } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Flex ml="auto">
      <Link
        as={NavLink}
        ml="5"
        fontSize={['xl', null, '4xl', null]}
        _activeLink={{ color: 'white' }}
        _hover={{ color: 'white' }}
        transition="color 250ms cubic-bezier(0.4, 0, 0.2, 1)"
        to="/register"
      >
        <Text mr="5">Register</Text>
      </Link>
      <Link
        as={NavLink}
        ml={['2', null, '5', null]}
        fontSize={['xl', null, '4xl', null]}
        _activeLink={{ color: 'white' }}
        _hover={{ color: 'white' }}
        transition="color 250ms cubic-bezier(0.4, 0, 0.2, 1)"
        to="/login"
      >
        <Text>Login</Text>
      </Link>
    </Flex>
  );
};
