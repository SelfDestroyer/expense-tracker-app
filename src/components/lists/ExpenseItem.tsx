import React, {FC, useMemo} from 'react';
import {
  Platform,
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import IExpense from '../../models/IExpense';
import ITheme from '../../types/styles/theme/DefautTheme';
import {useTheme} from '../../hooks/theme/useTheme';
import ThemeFont from '../../types/styles/theme/ThemeFont';
import {useNavigation} from '@react-navigation/native';
import {ManageExpenseNavigationProps} from '../../types/navigation/ScreenTypes';
import {Screen} from '../../types/navigation/Screens';

const ExpenseItem: FC<IExpense> = ({
  description,
  date,
  amount,
  id,
}): JSX.Element => {
  const {theme} = useTheme();

  const themedStyles = useMemo(() => styles(theme), [theme]);
  const onPressStyleChangeHandler = ({
    pressed,
  }: PressableStateCallbackType): ViewStyle | false =>
    Platform.OS === 'ios' && pressed && themedStyles.pressed;

  const navigation = useNavigation<ManageExpenseNavigationProps>();
  const onExpanseItemPressHandler = () =>
    navigation.navigate(Screen.ManageExpense, {
      expense: {
        id: id,
        description: description,
        amount: amount,
        date: date,
      },
    });

  return (
    <Pressable
      onPress={onExpanseItemPressHandler}
      style={onPressStyleChangeHandler}>
      <View style={themedStyles.container}>
        <View>
          <Text style={[themedStyles.textBase, themedStyles.description]}>
            {description}
          </Text>
          <Text style={themedStyles.textBase}>{date}</Text>
        </View>
        <View style={themedStyles.amountContainer}>
          <Text style={themedStyles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      padding: 12,
      marginVertical: 8,
      backgroundColor: theme.colors.primary500,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 6,
      elevation: 3,
      shadowColor: theme.colors.gray500,
      shadowRadius: 4,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.4,
    },
    textBase: {
      fontSize: 16,
      color: theme.colors.primary50,
      fontWeight: '400',
      fontFamily: ThemeFont.SourceSansProRegular,
    },
    description: {
      marginBottom: 4,
      fontWeight: '700',
      fontFamily: ThemeFont.SourceSansProBold,
    },
    amountContainer: {
      paddingHorizontal: 12,
      paddingVertical: 4,
      backgroundColor: theme.colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      minWidth: 80,
    },
    amount: {
      fontSize: 14,
      color: theme.colors.primary500,
      fontWeight: '700',
      fontFamily: ThemeFont.SourceSansProBold,
    },
    pressed: {
      opacity: 0.5,
    },
  });
