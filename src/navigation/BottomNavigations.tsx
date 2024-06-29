import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigationsParamList} from './navigation_types';
import HomeStack from './BottomNavigators/HomeStack';
import ServicesStack from './BottomNavigators/ServicesStack';
import ActivityStack from './BottomNavigators/ActivityStack';
import AccountStack from './BottomNavigators/AccountStack';
import {Platform, StyleSheet} from 'react-native';
import {AppColors} from '../utils/colors';
import {SBR, SFZ, SH, SW} from '../utils/responsive';
import {getShadowStyle} from '../utils/helpers';
import HomeSvg from '../components/AllSvgs/HomeSvg';
import {Fonts} from '../utils/fonts';
import {useTranslation} from 'react-i18next';
import ServicesSvg from '../components/AllSvgs/ServicesSvg';
import ActivitySvg from '../components/AllSvgs/ActivitySvg';
import AccountSvg from '../components/AllSvgs/AccountSvg';

const Tab = createBottomTabNavigator<BottomNavigationsParamList>();

// Memeoized Icon components
const HomeIcon = memo(({focused}: {focused: boolean}) => (
  <HomeSvg focused={focused} />
));

const ServicesIcon = memo(({focused}: {focused: boolean}) => (
  <ServicesSvg focused={focused} />
));

const ActivityIcon = memo(({focused}: {focused: boolean}) => (
  <ActivitySvg focused={focused} />
));

const AccountIcon = memo(({focused}: {focused: boolean}) => (
  <AccountSvg focused={focused} />
));

// Function to render icons based on component
const renderIcon =
  (Component: React.ComponentType<{focused: boolean}>) =>
  ({focused}: {focused: boolean}) =>
    <Component focused={focused} />;

const BottomNavigations = () => {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({}) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.tapStyles,
        tabBarActiveTintColor: AppColors.black,
        tabBarInactiveTintColor: AppColors.black40,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarLabelPosition: 'below-icon',
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: t('Home'),
          tabBarIcon: renderIcon(HomeIcon),
        }}
      />
      <Tab.Screen
        name="ServicesStack"
        component={ServicesStack}
        options={{
          tabBarLabel: t('Services'),
          tabBarIcon: renderIcon(ServicesIcon),
        }}
      />
      <Tab.Screen
        name="ActivityStack"
        component={ActivityStack}
        options={{
          tabBarLabel: t('Activity'),
          tabBarIcon: renderIcon(ActivityIcon),
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarLabel: t('Account'),
          tabBarIcon: renderIcon(AccountIcon),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigations;

const styles = StyleSheet.create({
  tapStyles: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: AppColors.white,
    paddingTop: SH(10),
    height: Platform.OS === 'ios' ? SH(86) : SH(60),
    paddingHorizontal: SW(20),
    borderTopLeftRadius: SBR(20),
    borderTopRightRadius: SBR(20),
    ...getShadowStyle(),
  },
  tabBarLabelStyle: {
    fontSize: SFZ(14),
    marginTop: SH(2),
    fontFamily: Fonts.Medium,
  },
});
