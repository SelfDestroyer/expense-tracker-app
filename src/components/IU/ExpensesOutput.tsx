import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from '../lists/ExpensesList';
import {useAppSelector} from '../../hooks/redux/useAppSelector';

type ExpensesOutputProps = {
  readonly expensesPeriod: string;
};
const ExpensesOutput: FC<ExpensesOutputProps> = ({
  expensesPeriod,
}): JSX.Element => {
  const expenses = useAppSelector(state => state.expenses);

  return (
    <View style={styles.container}>
      <ExpensesSummary expensesPeriod={expensesPeriod} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {flex: 1},
});
