import React, {FC, useMemo} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import IExpense from '../../models/IExpense';
import ITheme from '../../types/styles/theme/DefautTheme';
import {useTheme} from '../../hooks/theme/useTheme';
import ThemeFont from '../../types/styles/theme/ThemeFont';
import getFormattedDate from '../../utils/getFormattedDate';

const ExpenseItem: FC<IExpense> = ({
  description,
  date,
  amount,
}): JSX.Element => {
  const {theme} = useTheme();

  const themedStyles = useMemo(() => styles(theme), [theme]);

  return (
    <Pressable>
      <View style={themedStyles.container}>
        <View>
          <Text style={[themedStyles.textBase, themedStyles.description]}>
            {description}
          </Text>
          <Text style={themedStyles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={themedStyles.amountContainer}>
          <Text style={themedStyles.amount}>{amount.toFixed(2)}</Text>
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
      color: theme.colors.primary500,
      fontWeight: '700',
      fontFamily: ThemeFont.SourceSansProBold,
    },
  });
