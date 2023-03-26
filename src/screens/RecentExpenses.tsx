import React from 'react';
import ScreenContainer from '../components/containers/ScreenContainer';
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import {useAppSelector} from '../hooks/redux/useAppSelector';
import {getDateMinusDays} from '../utils/date';

const RecentExpenses = (): JSX.Element => {
  const expenses = useAppSelector(state => state.expenses);
  const recentExpanses = expenses.filter(
    el => new Date(el.date) > getDateMinusDays(new Date(), 7),
  );

  return (
    <ScreenContainer>
      <ExpensesOutput
        expensesPeriod={'Last 7 Days'}
        expenses={recentExpanses}
      />
    </ScreenContainer>
  );
};

export default RecentExpenses;
