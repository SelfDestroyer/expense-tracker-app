import React, {FC, useMemo} from 'react';
import {
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import ITheme from '../../types/styles/theme/DefautTheme';
import {useTheme} from '../../hooks/theme/useTheme';

type ButtonProps = {
  readonly title: string;
  readonly onPress: () => void;
  readonly mode?: 'flat';
  readonly style?: ViewStyle;
};

const CustomButton: FC<ButtonProps> = ({
  title,
  onPress,
  mode,
  style,
}): JSX.Element => {
  const {theme} = useTheme();
  const themedStyles = useMemo(() => styles(theme), [theme]);
  const onPressStyleChangeHandler = ({
    pressed,
  }: PressableStateCallbackType): ViewStyle | false =>
    pressed && themedStyles.pressed;

  return (
    <View style={style}>
      <Pressable onPress={onPress} style={onPressStyleChangeHandler}>
        <View
          style={[themedStyles.button, mode === 'flat' && themedStyles.flat]}>
          <Text
            style={[
              themedStyles.buttonText,
              mode === 'flat' && themedStyles.flatText,
            ]}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = (theme: ITheme) =>
  StyleSheet.create({
    button: {
      borderRadius: 4,
      padding: 8,
      backgroundColor: theme.colors.primary500,
    },
    flat: {
      backgroundColor: 'transparent',
    },
    buttonText: {
      color: theme.colors.white,
      textAlign: 'center',
    },
    flatText: {
      color: theme.colors.primary200,
    },
    pressed: {
      opacity: 0.7,
      backgroundColor: theme.colors.primary100,
      borderRadius: 4,
    },
  });
