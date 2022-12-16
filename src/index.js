import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { ChakraProvider } from '@chakra-ui/react';
import {theme} from './theme';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="goit-react-hw-08-phonebook">
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </PersistGate>
    </ChakraProvider>
  </React.StrictMode>
);
