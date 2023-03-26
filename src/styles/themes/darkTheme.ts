import ITheme from '../../types/styles/theme/DefautTheme';
import {ThemeModes} from '../../types/styles/theme/ThemeModes';

export const darkTheme: ITheme = {
  mode: ThemeModes.DARK,
  colors: {
    primary50: '#c0acff',
    primary100: '#9380eb',
    primary200: '#7053d5',
    primary400: '#4613a4',
    primary500: '#2c067e',
    primary700: '#1b034f',
    primary800: '#100029',
    accent500: '#e0a500',
    error50: '#e687c4',
    error500: '#6d093b',
    gray500: '#292640',
    gray700: '#16141f',
    white: 'white',
    black: 'black',
  },
};
