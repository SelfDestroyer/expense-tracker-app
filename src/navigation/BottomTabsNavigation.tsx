import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../types/navigation/BottomTabParamList';
import {Screen} from '../types/navigation/Screens';
import RecentExpenses from '../screens/RecentExpenses';
import AllExpenses from '../screens/AllExpenses';
import Settings from '../screens/Settings';
import {ScreenTitles} from '../types/navigation/ScreenTitles';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabsNavigation = (): JSX.Element => {
  const defaultScreenOptions: BottomTabNavigationOptions = {
    // headerStyle: {
    //   backgroundColor: colors.primary500,
    // },
    // headerTintColor: colors.white,
    // tabBarStyle: {
    //   backgroundColor: colors.primary500,
    // },
    // tabBarActiveTintColor: colors.accent500,
  };

  return (
    <Tab.Navigator
      initialRouteName={Screen.AllExpenses}
      screenOptions={defaultScreenOptions}>
      <Tab.Screen
        name={Screen.AllExpenses}
        component={AllExpenses}
        options={{
          title: ScreenTitles.AllExpenses,
          tabBarLabel: ScreenTitles.AllExpenses,
          tabBarIcon: ({color, size}) => (
            <Icon size={size} color={color} name={'calendar'} />
          ),
        }}
      />
      <Tab.Screen
        name={Screen.RecentExpenses}
        component={RecentExpenses}
        options={{
          title: ScreenTitles.RecentExpenses,
          tabBarLabel: ScreenTitles.RecentExpenses,
          tabBarIcon: ({color, size}) => (
            <Icon size={size} color={color} name={'hourglass'} />
          ),
        }}
      />
      <Tab.Screen
        name={Screen.Settings}
        component={Settings}
        options={{
          title: ScreenTitles.Settings,
          tabBarLabel: ScreenTitles.Settings,
          tabBarIcon: ({color, size}) => (
            <Icon size={size} color={color} name={'settings'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigation;
