import { createTheme } from "@mui/material";


// Define the colors
const kickWhite = '#ffffff';
 // eslint-disable-next-line 
const kickBlack = '#000000';
const kickGrey = '#656969';
const kickGreen1 = '#87c442';
 // eslint-disable-next-line 
const kickGreen = '#05ce78';
const kickBlue = '#0000ee';
const kickPurp = '#5555ff';

const secKickBlue = '#003bff';
const secKickBlue2 = '#2b60ff';
const secKickGrey = '#9b9e9e';
const secKickLightGrey = '#e8e8e8';

const secKickDarkWhite = '#efefef';
 // eslint-disable-next-line 
const secKickDarkWhite2 = '#f0f0f0';
const secKickWhite2 = '#fbfbfa';
const secKickGreen = '#037362';
 // eslint-disable-next-line 
const secKickBlack = '#282828';
 // eslint-disable-next-line 
const secKickBlack2 = '#2a2a2e';


// Define the theme
const theme = {
  palette: {
    primary: {
      main: kickWhite,
      light: kickPurp,
      dark: kickGrey,
    },
    secondary: {
      main: secKickBlue,
      light: secKickBlue2,
      dark: secKickGrey,
    },
  },
  typography: {},
  common: {
    navBG: kickWhite,
    navLinks: secKickGrey,
    navHover: secKickGreen,
    navButtonColor: kickBlue,
    footerBG: kickWhite,
    footerLinks: kickGreen1,
    footerLinkHover: secKickLightGrey,
    footerButtonColor: secKickWhite2,
  },

};

type CustomTheme = {
    [Key in keyof typeof theme]: typeof theme[Key]
}
declare module '@mui/material' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

export default createTheme(theme);
