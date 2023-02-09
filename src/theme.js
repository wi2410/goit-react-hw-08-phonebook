import { extendTheme } from '@chakra-ui/react';
import '@fontsource/caveat';

export const theme = extendTheme({

  fonts: { body: `"Montserrat", Italic`, heading: `"Montserrat", Italic` },

  styles: {
    global: {
      body: {
        // bg: '#ffd700',
        background:'url(https://www.atypyk.com/443-large_default/phonebook.jpg) center/cover no-repeat',
        color: 'black',
        fontSize: '2xl',
      },
      h2: {
        fontSize: '4xl',
        fontWeight: 'bold',
      },

    },
  },
});
