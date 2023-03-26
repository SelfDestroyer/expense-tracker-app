import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from '../lists/ExpensesList';
import IExpense from '../../models/IExpense';

type ExpensesOutputProps = {
  readonly expensesPeriod: string;
  readonly expenses: IExpense[];
  readonly fallBackText?: string;
};
const ExpensesOutput: FC<ExpensesOutputProps> = ({
  expensesPeriod,
  expenses,
  fallBackText,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expensesPeriod={expensesPeriod} expenses={expenses} />
      <ExpensesList expenses={expenses} fallBackText={fallBackText} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {flex: 1},
});
