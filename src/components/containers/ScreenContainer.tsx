import React, {FC, PropsWithChildren, useMemo} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import ITheme from '../../types/styles/theme/DefautTheme';
import {useTheme} from '../../hooks/theme/useTheme';

type ScreenContainerProps = PropsWithChildren & {
  readonly style?: ViewStyle;
};
const ScreenContainer: FC<ScreenContainerProps> = ({
  children,
  style,
}): JSX.Element => {
  const {theme} = useTheme();

  const themedStyles = useMemo(() => styles(theme), [theme]);

  return <View style={[themedStyles.container, style]}>{children}</View>;
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
