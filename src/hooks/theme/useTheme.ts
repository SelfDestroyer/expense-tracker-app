import {useContext} from 'react';
import {ThemeContextType} from '../../types/contexts/theme/ThemeContext';
import {ThemeContext} from '../../contexts/theme/themeContext';

export const useTheme = (): ThemeContextType =>
  useContext<ThemeContextType>(ThemeContext);
