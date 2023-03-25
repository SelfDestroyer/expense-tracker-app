import React from 'react';
import ScreenContainer from '../components/common/ScreenContainer';
import ExpensesOutput from '../components/IU/ExpensesOutput';

const RecentExpenses = (): JSX.Element => {
  return (
    <ScreenContainer>
      <ExpensesOutput expensesPeriod={'Last 7 Days'} />
    </ScreenContainer>
  );
};

export default RecentExpenses;
