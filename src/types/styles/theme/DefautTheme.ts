import {ThemeModes} from './ThemeModes';

export default interface ITheme {
  readonly mode: ThemeModes;
  readonly colors: {
    primary50: string;
    primary100: string;
    primary200: string;
    primary400: string;
    primary500: string;
    primary700: string;
    primary800: string;
    accent500: string;
    error50: string;
    error500: string;
    gray500: string;
    gray700: string;
    white: string;
    black: string;
  };
}
