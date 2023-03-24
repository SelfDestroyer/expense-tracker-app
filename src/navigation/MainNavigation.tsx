import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';

const MainNavigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default MainNavigation;
