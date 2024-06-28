import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigationsParamList} from './navigation_types';
import HomeStack from './BottomNavigators/HomeStack';
import ServicesStack from './BottomNavigators/ServicesStack';
import ActivityStack from './BottomNavigators/ActivityStack';
import AccountStack from './BottomNavigators/AccountStack';
import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../utils/colors';
import {RPH, RPW, SBR, SFZ, SH} from '../utils/responsive';
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

const BottomNavigations = () => {
  const {t} = useTranslation();

  const renderHomeIcon = ({focused}: {focused: boolean}) => (
    <HomeIcon focused={focused} />
  );

  const renderServicesIcon = ({focused}: {focused: boolean}) => (
    <ServicesIcon focused={focused} />
  );

  const renderActivityIcon = ({focused}: {focused: boolean}) => (
    <ActivityIcon focused={focused} />
  );

  const renderAccountIcon = ({focused}: {focused: boolean}) => (
    <AccountIcon focused={focused} />
  );

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({}) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.tapStyles,
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: Colors.black50,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarLabelPosition: 'below-icon',
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: t('Home'),
          tabBarIcon: renderHomeIcon,
        }}
      />
      <Tab.Screen
        name="ServicesStack"
        component={ServicesStack}
        options={{
          tabBarLabel: t('Services'),
          tabBarIcon: renderServicesIcon,
        }}
      />
      <Tab.Screen
        name="ActivityStack"
        component={ActivityStack}
        options={{
          tabBarLabel: t('Activity'),
          tabBarIcon: renderActivityIcon,
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarLabel: t('Account'),
          tabBarIcon: renderAccountIcon,
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
    backgroundColor: Colors.white,
    paddingTop: SH(10),
    height: Platform.OS === 'ios' ? SH(86) : RPH(70),
    paddingHorizontal: RPW(20),
    borderTopLeftRadius: SBR(20),
    borderTopRightRadius: SBR(20),
    ...getShadowStyle(),
  },
  tabBarLabelStyle: {
    fontSize: SFZ(12),
    marginTop: SH(2),
    fontFamily: Fonts.Medium,
  },
});
