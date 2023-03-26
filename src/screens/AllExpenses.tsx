import React from 'react';
import ScreenContainer from '../components/containers/ScreenContainer';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import {useAppSelector} from '../hooks/redux/useAppSelector';

const AllExpenses = (): JSX.Element => {
  const expenses = useAppSelector(state => state.expenses);

  return (
    <ScreenContainer>
      <ExpensesOutput expensesPeriod={'Total'} expenses={expenses} />
    </ScreenContainer>
  );
};

export default AllExpenses;
