import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from '../../hooks/theme/useTheme';

const CustomStatusBar = (): JSX.Element => {
  const {theme} = useTheme();
  return (
    <StatusBar
      backgroundColor={theme.colors.primary500}
      barStyle={'light-content'}
    />
  );
};

export default CustomStatusBar;
