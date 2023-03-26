import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {MainStackParamList} from './MainStackParamList';
import {Screen} from './Screens';

export type EditExpenseNavigationProps = NativeStackNavigationProp<
  MainStackParamList,
  Screen.EditExpense
>;

export type EditExpenseScreenProps = NativeStackScreenProps<
  MainStackParamList,
  Screen.EditExpense
>;

export type AddExpensesScreenProps = NativeStackScreenProps<
  MainStackParamList,
  Screen.AddExpense
>;
