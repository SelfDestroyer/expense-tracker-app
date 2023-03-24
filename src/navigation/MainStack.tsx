import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation/MainStackParamList';
import {Screen} from '../types/navigation/Screens';
import ManageExpense from '../screens/ManageExpens';
import BottomTabsNavigation from './BottomTabsNavigation';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={Screen.ExpensesOverview}>
      <Stack.Screen
        name={Screen.ExpensesOverview}
        component={BottomTabsNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={Screen.ManageExpenses} component={ManageExpense} />
    </Stack.Navigator>
  );
};

export default MainStack;
