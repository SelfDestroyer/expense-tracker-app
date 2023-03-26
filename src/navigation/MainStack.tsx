import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation/MainStackParamList';
import {Screen} from '../types/navigation/Screens';
import BottomTabsNavigation from './BottomTabsNavigation';
import {useTheme} from '../hooks/theme/useTheme';
import {ScreenTitles} from '../types/navigation/ScreenTitles';
import EditExpense from '../screens/EditExpense';
import AddExpense from '../screens/AddExpense';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = (): JSX.Element => {
  const {theme} = useTheme();

  const defaultScreenOptions: NativeStackNavigationOptions = {
    headerStyle: {
      backgroundColor: theme.colors.primary500,
    },
    headerTintColor: theme.colors.white,
  };
  return (
    <Stack.Navigator
      initialRouteName={Screen.ExpensesOverview}
      screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name={Screen.ExpensesOverview}
        component={BottomTabsNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Screen.EditExpense}
        component={EditExpense}
        options={{
          presentation: 'modal',
          title: ScreenTitles.EditExpenses,
        }}
      />
      <Stack.Screen
        name={Screen.AddExpense}
        component={AddExpense}
        options={{
          presentation: 'modal',
          title: ScreenTitles.AddExpenses,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
