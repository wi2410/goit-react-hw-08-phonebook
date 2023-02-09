import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Container, Heading } from '@chakra-ui/react';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container
      // backgroundImage="url('/img/phonebook.jpg')"
      // maxW="container.lg"
      // minH="container.lg"
      // minW={['700px', null, '800px', null]}
      // p="7"
      // boxShadow="dark-lg"
      // borderRadius="lg"
      // border="dashed"
      // backgroundImage="url('./img/phonebook.jpg')"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
    >
      {isRefreshing ? (
        <Heading
          as="h2"
          fontSize={['lg', null, '4xl', null]}
          textAlign="center"
          mb="7"
        >
          Refreshing user...
        </Heading>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/" component={<LoginPage />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}
    </Container>
  );
};
