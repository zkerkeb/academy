import { logoSmall, logoSmallGrey } from '../assets/images'
const themeLight = {
  name: 'light',
  logo: logoSmall,
  general: {
    primary: '#ffffff',
    secondary: '#f6f6f6',
    tertiary: '#f6f6f6',
    headerShadow: '#0000003f',
    menu: '#999797',
    illustration: '#f6f6f6'
  },
  text: {
    common: '#000000',
    menu: '#000000',
    code: 'red'
  }
}

const themeDark = {
  name: 'dark',
  logo: logoSmallGrey,
  general: {
    primary: '#222222',
    secondary: '#363636',
    tertiary: '#363636',
    headerShadow: '#0000003f',
    menu: '#999797',
    illustration: '#363636'
  },
  text: {
    common: '#ffffff',
    menu: '#ffffff',
    code: '#68826F',
    link: '#bacfbf'
  }
}

export { themeDark, themeLight }
