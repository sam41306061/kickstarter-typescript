// src/types/theme.d.ts
import { Theme } from '@mui/material/styles';

interface CustomTheme extends Theme {
  palette: Theme['palette'] & {
    common: {
      navBG: string;
      navLinks: string;
      navHover: string;
      navButtonColor: string;
      footerBG: string;
      footerLinks: string;
      footerLinkHover: string;
      footerButtonColor: string;
    };
  };
}

declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {
    // primary
    kickGreen: string;
    kickGreen1: string;
    kickWhite: string;
    kickBlack: string;
    kickGrey: string;
    kickPurp: string;
    //secondary
    secKickBlue: string;
    secKickBlue2: string;
    secKickGrey: string;
    secKickLightGrey: string;
    secKickDarkWhite: string;
    secKickDarkWhite2: string;
    secKickWhite2: string;
    secKickGreen: string;
    secKickBlack: string;
    secKickBlack2: string;
  }
}
