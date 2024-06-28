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

const Tab = createBottomTabNavigator<BottomNavigationsParamList>();

// Memeoized Icon components
const HomeIcon = memo(({focused}: {focused: boolean}) => (
  <HomeSvg focused={focused} />
));
// const ServicesIcon = memo(({focused}: {focused: boolean}) => <ServicesSvg focused={focused} />);
// const ActivityIcon = memo(({focused}: {focused: boolean}) => <ActivitySvg focused={focused} />);
// const AccountIcon = memo(({focused}: {focused: boolean}) => <AccountSvg focused={focused} />);

const BottomNavigations = () => {
  const {t} = useTranslation();
  const renderHomeIcon = ({focused}: {focused: boolean}) => (
    <HomeIcon focused={focused} />
  );

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({}) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.tapStyles,
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: Colors.grey100,
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
          tabBarIcon: renderHomeIcon,
        }}
      />
      <Tab.Screen
        name="ActivityStack"
        component={ActivityStack}
        options={{
          tabBarLabel: t('Activity'),
          tabBarIcon: renderHomeIcon,
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarLabel: t('Account'),
          tabBarIcon: renderHomeIcon,
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
    height: Platform.OS === 'ios' ? SH(70) : SH(60),
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === 'ios' ? RPH(30) : RPH(16),
    paddingHorizontal: RPW(20),
    borderTopLeftRadius: SBR(20),
    borderTopRightRadius: SBR(20),
    ...getShadowStyle(),
  },
  tabBarLabelStyle: {
    bottom: SH(10),
    fontSize: SFZ(14),
    paddingBottom: Platform.OS === 'ios' ? 0 : '10%',
    marginTop: SH(16),
    fontFamily: Fonts.Medium,
  },
});
