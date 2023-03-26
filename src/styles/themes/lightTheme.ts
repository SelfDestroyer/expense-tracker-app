import ITheme from '../../types/styles/theme/DefautTheme';
import {ThemeModes} from '../../types/styles/theme/ThemeModes';

export const lightTheme: ITheme = {
  mode: ThemeModes.LIGHT,
  colors: {
    primary50: '#faf5ff',
    primary100: '#e6daff',
    primary200: '#cdb6ff',
    primary400: '#8c4fd7',
    primary500: '#6a1fb8',
    primary700: '#431171',
    primary800: '#2e084e',
    accent500: '#f7bc0c',
    error50: '#ffe0ed',
    error500: '#bf3d81',
    gray500: '#a4a0b3',
    gray700: '#696581',
    white: 'white',
    black: 'black',
  },
};
