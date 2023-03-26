import {Screen} from './Screens';

export type MainStackParamList = {
  [Screen.AllExpenses]: undefined;
  [Screen.ExpensesOverview]: undefined;
  [Screen.RecentExpenses]: undefined;
  [Screen.EditExpense]: {
    expanseId: string;
  };
  [Screen.AddExpense]: undefined;
};
