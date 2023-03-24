import ITheme from '../../styles/theme/DefautTheme';
import {ThemeModes} from '../../styles/theme/ThemeModes';

export type ThemeContextType = {
  themeMode: string;
  theme: ITheme;
  isDarkTheme: boolean;
  setTheme: (theme: ThemeModes) => void;
};
