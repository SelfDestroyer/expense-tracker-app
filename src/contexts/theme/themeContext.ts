import {createContext} from 'react';
import {ThemeContextType} from '../../types/contexts/theme/ThemeContext';
import {ThemeModes} from '../../types/styles/theme/ThemeModes';
import {lightTheme} from '../../styles/themes/lightTheme';

const contextDefaultValues: ThemeContextType = {
  themeMode: ThemeModes.LIGHT,
  theme: lightTheme,
  isDarkTheme: false,
  setTheme: () => {},
};

export const ThemeContext =
  createContext<ThemeContextType>(contextDefaultValues);
