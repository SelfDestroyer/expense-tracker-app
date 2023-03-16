import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation/MainStackParamList';
import {Screen} from '../types/navigation/Screens';
import AllExpenses from '../screens/AllExpenses';
import ManageExpense from '../screens/ManageExpens';
import RecentExpenses from '../screens/RecentExpenses';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screen.Drawer} component={DrawerNavigation} />
      <Stack.Screen name={Screen.AllExpenses} component={AllExpenses} />
      <Stack.Screen name={Screen.ManageExpenses} component={ManageExpense} />
      <Stack.Screen name={Screen.RecentExpenses} component={RecentExpenses} />
    </Stack.Navigator>
  );
};

export default MainStack;
