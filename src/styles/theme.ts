import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "700": "#47585B",
      "600": "#999999",
      "300": "#DADADA",
      "50": "#F5F8FA"
    },
    white: "#FFFFFF",
    black: "#000000",
    yellow: {
      "500": "#FFBA08"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.50'
      }
    }
  }
});