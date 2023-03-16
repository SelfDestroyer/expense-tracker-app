import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerParamList} from '../types/navigation/DrawerParamList';
import {Screen} from '../types/navigation/Screens';
import Settings from '../screens/Drawer/Settings';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation = (): JSX.Element => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={Screen.Settings} component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
