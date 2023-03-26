import React, {FC, useMemo} from 'react';
import {
  Text,
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {useTheme} from '../../hooks/theme/useTheme';
import ITheme from '../../types/styles/theme/DefautTheme';

type CustomInputProps = {
  readonly label: string;
  readonly textInputConfig?: TextInputProps;
  readonly style?: ViewStyle;
};

const CustomInput: FC<CustomInputProps> = ({
  label,
  textInputConfig,
  style,
}): JSX.Element => {
  const {theme} = useTheme();
  const themedStyles = useMemo(() => styles(theme), [theme]);

  return (
    <View style={[themedStyles.container, style]}>
      <Text style={themedStyles.label}>{label}</Text>
      <TextInput
        {...textInputConfig}
        style={[
          themedStyles.input,
          textInputConfig?.multiline && themedStyles.inputMultiline,
        ]}
      />
    </View>
  );
};

export default CustomInput;

const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 4,
      marginVertical: 8,
    },
    label: {
      fontSize: 12,
      color: theme.colors.primary100,
      marginBottom: 4,
    },
    input: {
      backgroundColor: theme.colors.primary100,
      color: theme.colors.primary700,
      padding: 6,
      borderRadius: 6,
      fontSize: 18,
    },
    inputMultiline: {
      minHeight: 100,
      textAlignVertical: 'top',
    },
  });
