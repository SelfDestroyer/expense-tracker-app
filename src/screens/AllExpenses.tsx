import React from 'react';
import ScreenContainer from '../components/common/ScreenContainer';
import ExpensesOutput from '../components/IU/ExpensesOutput';

const AllExpenses = (): JSX.Element => {
  return (
    <ScreenContainer>
      <ExpensesOutput expensesPeriod={'Total'} />
    </ScreenContainer>
  );
};

export default AllExpenses;
