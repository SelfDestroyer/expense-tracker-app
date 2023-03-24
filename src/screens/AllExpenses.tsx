import React, {useMemo} from 'react';
import ScreenContainer from '../components/common/ScreenContainer';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../hooks/theme/useTheme';
import {ThemeModes} from '../types/styles/theme/ThemeModes';
import ITheme from '../types/styles/theme/DefautTheme';

const AllExpenses = (): JSX.Element => {
  const {theme, setTheme, isDarkTheme, themeMode} = useTheme();
  const themedStyles = useMemo(() => styles(theme), [theme]);

  return (
    <ScreenContainer>
      <Button
        title={'Toggle theme'}
        onPress={() =>
          setTheme(isDarkTheme ? ThemeModes.LIGHT : ThemeModes.DARK)
        }
      />
      <Text
        style={{
          color: 'red',
        }}>
        {themeMode}
      </Text>
      <View style={themedStyles.container} />
    </ScreenContainer>
  );
};

export default AllExpenses;

const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary500,
      width: 300,
      height: 300,
      marginVertical: 10,
    },
  });
