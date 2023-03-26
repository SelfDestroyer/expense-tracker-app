import React, {FC, useMemo} from 'react';
import ScreenContainer from '../components/containers/ScreenContainer';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {useTheme} from '../hooks/theme/useTheme';
import {ThemeModes} from '../types/styles/theme/ThemeModes';
import {SettingsScreenProps} from '../types/navigation/ScreenTypes';
import ITheme from '../types/styles/theme/DefautTheme';
import ThemeFont from '../types/styles/theme/ThemeFont';

const Settings: FC<SettingsScreenProps> = (): JSX.Element => {
  const {isDarkTheme, setTheme, theme} = useTheme();

  const themedStyles = useMemo(() => styles(theme), [theme]);

  const onValueChangeHandler = (): void =>
    setTheme(isDarkTheme ? ThemeModes.LIGHT : ThemeModes.DARK);

  return (
    <ScreenContainer>
      <View style={themedStyles.container}>
        <Text style={themedStyles.text}>Change theme</Text>
        <Switch
          trackColor={{
            false: theme.colors.primary100,
            true: theme.colors.primary100,
          }}
          thumbColor={theme.colors.white}
          ios_backgroundColor={theme.colors.primary400}
          onValueChange={onValueChangeHandler}
          value={isDarkTheme}
        />
      </View>
    </ScreenContainer>
  );
};

export default Settings;

const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 8,
    },
    text: {
      color: theme.colors.white,
      fontSize: 18,
      fontWeight: '600',
      fontFamily: ThemeFont.SourceSansProSemiBold,
    },
  });
