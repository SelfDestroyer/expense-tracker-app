import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from '../../hooks/theme/useTheme';

const CustomStatusBar = (): JSX.Element => {
  const {theme, isDarkTheme} = useTheme();
  return (
    <StatusBar
      backgroundColor={isDarkTheme ? theme.colors.white : theme.colors.white}
      barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
    />
  );
};

export default CustomStatusBar;
