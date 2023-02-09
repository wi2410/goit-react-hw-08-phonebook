import { useAuth } from 'hooks';
import { GiNotebook } from "react-icons/gi";
import { IoMdContacts } from "react-icons/io";
import { Flex, Show } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex alignItems="center">
      <Show above='md'><GiNotebook size='32' fill='white'/></Show>
      <Link
        as={NavLink}
        ml={['1', null, '5', null]}
        fontSize={['xl', null, '4xl', null]}
        _activeLink={{ color: 'white' }}
        _hover={{ color: 'white' }}
        transition="color 250ms cubic-bezier(0.4, 0, 0.2, 1)"
        to="/"
        mr="5" borderRadius="10" border="solid" p="1.5"
      >
        Home
      </Link>
      {isLoggedIn && (
        <>
        
        <Link
          as={NavLink}
          m="5"
          ml={['2', null, '5', null]}
          fontSize={['xl', null, '4xl', null]}
          _activeLink={{ color: 'white' }}
          _hover={{ color: 'white' }}
          transition="color 250ms cubic-bezier(0.4, 0, 0.2, 1)"
          display="flex" alignItems="center"
          to="/contacts"
          ><IoMdContacts size='32' />
          Contacts
        </Link>
        
        </>
        
      )}
    </Flex>
  );
};
