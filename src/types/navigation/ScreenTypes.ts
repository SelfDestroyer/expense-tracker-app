import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {MainStackParamList} from './MainStackParamList';
import {Screen} from './Screens';
import {BottomTabParamList} from './BottomTabParamList';

export type ManageExpenseNavigationProps = NativeStackNavigationProp<
  MainStackParamList,
  Screen.ManageExpense
>;

export type ManageExpenseScreenProps = NativeStackScreenProps<
  MainStackParamList,
  Screen.ManageExpense
>;

export type SettingsScreenProps = NativeStackScreenProps<
  BottomTabParamList,
  Screen.Settings
>;
