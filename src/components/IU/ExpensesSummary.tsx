import React, {FC, useMemo} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import IExpense from '../../models/IExpense';
import {useTheme} from '../../hooks/theme/useTheme';
import ITheme from '../../types/styles/theme/DefautTheme';
import ThemeFont from '../../types/styles/theme/ThemeFont';

type ExpensesSummaryProps = {
  readonly expensesPeriod: string;
  readonly expenses: IExpense[];
};

const ExpensesSummary: FC<ExpensesSummaryProps> = ({
  expenses,
  expensesPeriod,
}): JSX.Element => {
  const expensesSum = useMemo(
    () => expenses.reduce((sum, expense) => sum + expense.amount, 0),
    [expenses],
  );
  const {theme} = useTheme();

  const themedStyles = useMemo(() => styles(theme), [theme]);

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.period}>{expensesPeriod}</Text>
      <Text style={themedStyles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};
export default ExpensesSummary;

const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary50,
      padding: 8,
      borderRadius: 6,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    period: {
      fontSize: 12,
      fontWeight: '400',
      color: theme.colors.primary400,
      fontFamily: ThemeFont.SourceSansProRegular,
    },
    sum: {
      fontSize: 16,
      color: theme.colors.primary400,
      fontWeight: '700',
      fontFamily: ThemeFont.SourceSansProBold,
    },
  });
