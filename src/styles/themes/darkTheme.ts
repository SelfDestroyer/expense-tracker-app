import ITheme from '../../types/styles/theme/DefautTheme';
import {ThemeModes} from '../../types/styles/theme/ThemeModes';

export const darkTheme: ITheme = {
  mode: ThemeModes.DARK,
  colors: {
    primary50: '#e4d9fd',
    primary100: '#c6affc',
    primary200: '#a281f0',
    primary400: '#5721d4',
    primary500: '#3e04c3',
    primary700: '#2d0689',
    primary800: 'red',
    accent500: '#f7bc0c',
    error50: '#fcc4e4',
    error500: '#9b095c',
    gray500: '#39324a',
    gray700: '#221c30',
    white: 'white',
    black: 'black',
  },
};
