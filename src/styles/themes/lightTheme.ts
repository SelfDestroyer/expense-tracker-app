import ITheme from '../../types/styles/theme/DefautTheme';
import {ThemeModes} from '../../types/styles/theme/ThemeModes';

export const lightTheme: ITheme = {
  mode: ThemeModes.LIGHT,
  colors: {
    primary50: '#d9d9a1',
    primary100: '#c7c765',
    primary200: '#abae37',
    primary400: '#7e7d1e',
    primary500: '#65640b',
    primary700: '#3d3c00',
    primary800: '#272600',
    accent500: '#f7bc0c',
    error50: '#ff0000',
    error500: '#a60101',
    gray500: '#6f6a7a',
    gray700: '#3b3742',
    white: 'white',
    black: 'black',
  },
};
