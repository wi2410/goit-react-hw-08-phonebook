import { useDispatch } from 'react-redux';
import { Flex, Button, Text } from '@chakra-ui/react';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex alignItems="center">
      <Text fontSize={['sm', null, '3xl', 'null']}>
        Welcome,
        <Text display="inline-block" color="white">
          {user.name}
        </Text>
      </Text>
      <Button
        colorScheme="black"
        _hover={{ color: 'white' }}
        transition="color 250ms cubic-bezier(0.4, 0, 0.2, 1)"
        variant="link"
        fontWeight="normal"
        ml={['2', null, '5', null]}
        fontSize={['xl', null, '4xl', 'null']}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        LogOut
      </Button>
    </Flex>
  );
};
