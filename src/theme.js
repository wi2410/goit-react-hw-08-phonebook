import { extendTheme } from '@chakra-ui/react';
import '@fontsource/caveat';

export const theme = extendTheme({

  fonts: { body: `"URW Chancery L", cursive`, heading: `"URW Chancery L", cursive` },

  styles: {
    global: {
      body: {
        bg: '#ffd700',
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
