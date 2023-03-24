import * as React from 'react';
import {Appearance, useColorScheme} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import ITheme from '../../types/styles/theme/DefautTheme';
import {ThemeContextType} from '../../types/contexts/theme/ThemeContext';
import {ThemeModes} from '../../types/styles/theme/ThemeModes';
import {ThemeContext} from './themeContext';

type ThemeProviderProps = {
  lightTheme: ITheme;
  darkTheme: ITheme;
};

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  darkTheme,
  lightTheme,
}): JSX.Element => {
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState<ITheme>(lightTheme);

  const [themeMode, setThemeMode] = useState<ThemeModes>(ThemeModes.LIGHT);

  const onChangeTheme = useCallback(
    (newTheme: ThemeModes, deviceColorScheme: string | null | undefined) => {
      setThemeMode(newTheme);
      AsyncStorage.setItem('theme', newTheme ?? '');

      if (newTheme === ThemeModes.DEVICE_THEME) {
        setTheme(deviceColorScheme === 'dark' ? darkTheme : lightTheme);
      } else {
        setTheme(newTheme === ThemeModes.DARK ? darkTheme : lightTheme);
      }
    },
    [darkTheme, lightTheme],
  );

  useEffect(() => {
    AsyncStorage.getItem('theme').then(newTheme => {
      const t = newTheme as ThemeModes;

      onChangeTheme(t ?? 'light', colorScheme);
    });
  }, [colorScheme, onChangeTheme]);

  const changeThemeMemo = useMemo(
    () => ({
      changeTheme: async (newTheme: ThemeModes) => {
        const deviceColorScheme = Appearance.getColorScheme();
        onChangeTheme(newTheme, deviceColorScheme);
      },
    }),
    [onChangeTheme],
  );

  const context: ThemeContextType = {
    themeMode: themeMode,
    theme: theme,
    setTheme: changeThemeMemo.changeTheme,
    isDarkTheme: theme.mode === ThemeModes.DARK,
  };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
