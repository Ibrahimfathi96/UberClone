import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './navigation_types';
import IntroScreens from '../screens/Intro';
import SplashScreen from '../screens/Splash';
import AuthStack from './AuthStack';
import BottomNavigations from './BottomNavigations';

const commonScreenOptions = {headerShown: false};
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={commonScreenOptions}>
      <Stack.Screen name="IntroScreen" component={IntroScreens} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="BottomNavigations" component={BottomNavigations} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
