import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    background: '#E1E1E6',
    primary: {
      700: '#92A0AD'
    },
    secondary: {
      700: '#213A5C'
    },
    blue: {
      700: '#0E2038',
      500: '#213A5C',
      300: '#758F99',
      200: '#90A4B0',
      100: '#EEF4ED'
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      150: '#D9D9D9',
      100: '#E1E1E6'
    },
    green: {
      500: '#007b00',
      300: '#92e27a'
    },
    white: '#FFFFFF',
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20
  },
  sizes: {
    14: 56
  }
});