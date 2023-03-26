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
import ManageExpense from '../screens/ManageExpense';

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
        name={Screen.ManageExpense}
        component={ManageExpense}
        options={{
          presentation: 'modal',
          title: ScreenTitles.ManageExpense,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
