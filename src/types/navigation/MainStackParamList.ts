import {Screen} from './Screens';
import IExpense from '../../models/IExpense';

export type MainStackParamList = {
  [Screen.AllExpenses]: undefined;
  [Screen.ExpensesOverview]: undefined;
  [Screen.RecentExpenses]: undefined;
  [Screen.ManageExpense]: {
    expense?: IExpense;
  };
};
