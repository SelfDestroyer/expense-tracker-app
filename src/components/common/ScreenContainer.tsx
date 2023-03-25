import React, {FC, PropsWithChildren, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import ITheme from '../../types/styles/theme/DefautTheme';
import {useTheme} from '../../hooks/theme/useTheme';

const ScreenContainer: FC<PropsWithChildren> = ({children}): JSX.Element => {
  const {theme} = useTheme();

  const themedStyles = useMemo(() => styles(theme), [theme]);

  return <View style={themedStyles.container}>{children}</View>;
};

export default ScreenContainer;

const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary700,
      flex: 1,
      paddingHorizontal: 24,
      paddingBottom: 0,
      paddingTop: 24,
    },
  });
