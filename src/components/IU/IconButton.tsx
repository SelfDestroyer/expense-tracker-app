import React, {FC} from 'react';
import {
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type IconButtonProps = {
  readonly color: string | undefined;
  readonly size: number;
  readonly iconName: string;
  readonly onPress: () => void;
};
const IconButton: FC<IconButtonProps> = ({
  color,
  size,
  iconName,
  onPress,
}): JSX.Element => {
  const onPressStyleChangeHandler = ({
    pressed,
  }: PressableStateCallbackType): ViewStyle | false =>
    pressed && styles.pressed;

  return (
    <Pressable onPress={onPress} style={onPressStyleChangeHandler}>
      <View style={styles.container}>
        <Icon color={color} size={size} name={iconName} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.5,
  },
});
