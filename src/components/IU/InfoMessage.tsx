import React, {FC, useMemo} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {useTheme} from '../../hooks/theme/useTheme';
import ITheme from '../../types/styles/theme/DefautTheme';
import ThemeFont from '../../types/styles/theme/ThemeFont';

type InfoMessageProps = {
  readonly message: string | undefined;
  readonly style?: ViewStyle | undefined;
  readonly textStyle?: TextStyle | undefined;
};

const InfoMessage: FC<InfoMessageProps> = ({
  message,
  style,
  textStyle,
}): JSX.Element => {
  const {theme} = useTheme();
  const themedStyles = useMemo(() => styles(theme), [theme]);

  return (
    <View style={[themedStyles.container, style]}>
      <Text style={[themedStyles.infoText, textStyle]}>{message}</Text>
    </View>
  );
};

export default InfoMessage;

const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      marginTop: 32,
    },
    infoText: {
      color: theme.colors.white,
      fontSize: 16,
      fontWeight: '700',
      fontFamily: ThemeFont.SourceSansProBold,
      textAlign: 'center',
    },
  });
