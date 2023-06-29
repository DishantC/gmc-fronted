import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { BlurView } from '@react-native-community/blur';

// tab stack
import DashBoardStack from './TabComponents/DashBoardStack';
import EvStack from './TabComponents/EvStack';
import SosServicesStack from './TabComponents/SosServicesStack';
import NotificationScreen from './TabComponents/NotificationScreen';
import AccountStack from './TabComponents/AccountStack';
import HomeIcon from '../assets/icons/HomeIcon';

import NotificationBell from '../assets/icons/NotificationBell';
import SoSIcon from '../assets/icons/SoSIcon';
import EVIcon from '../assets/icons/EVIcon';
import ProfileIcon from '../assets/icons/ProfileIcon';

import { navigator } from './navigator';
import color from '../theme/color';

const Tab = createBottomTabNavigator();

const { width } = Dimensions.get('window');

const TabStack = () => {
  // eslint-disable-next-line
  const TabBar = props => (
    <BlurView
      style={styles.blurView}
      blurType="dark"
      blurAmount={Platform.OS === 'ios' ? 4 : 10}
      blurRadius={25}
      overlayColor="transparent">
      <BottomTabBar {...props} />
    </BlurView>
  );

  return (
    <Tab.Navigator
      initialRouteName={navigator.dashboard}
      // tabBar={props => <TabBar {...props} />}
      screenOptions={() => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      })}>
      {tabData.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.routeName}
            component={item.component}
            options={{
              tabBarIcon: ({ focused }) => {
                return <View>{getTabIcon(item.icon, focused)}</View>;
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabStack;

const getTabIcon = (icon, focused) => {
  switch (icon) {
    case 'HomeIcon':
      return <HomeIcon fill={focused ? color.white : color.blueDarker} />;
    case 'NotificationBell':
      return (
        <NotificationBell fill={focused ? color.white : color.blueDarker} />
      );
    case 'SoSIcon':
      return (
        <View style={styles.sosIcon}>
          <SoSIcon />
        </View>
      );
    case 'EVIcon':
      return <EVIcon fill={focused ? color.white : color.blueDarker} />;
    case 'ProfileIcon':
      return <ProfileIcon fill={focused ? color.white : color.blueDarker} />;
    default:
      return <HomeIcon fill={focused ? color.white : color.blueDarker} />;
  }
};

const tabData = [
  {
    icon: 'HomeIcon',
    routeName: navigator.dashboard,
    component: DashBoardStack,
  },
  {
    icon: 'NotificationBell',
    routeName: navigator.notifications,
    component: NotificationScreen,
  },
  {
    icon: 'SoSIcon',
    routeName: navigator.sosServices,
    component: SosServicesStack,
  },
  {
    icon: 'EVIcon',
    routeName: navigator.evScreen,
    component: EvStack,
  },
  {
    icon: 'ProfileIcon',
    routeName: navigator.account,
    component: AccountStack,
  },
];

const styles = StyleSheet.create({
  sosIcon: {
    zIndex: 100,
    position: 'relative',
    bottom: 0,
  },
  tabBarStyle: {
    backgroundColor: color.blue56,
    elevation: 0,
    borderRadius: 10,
    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
    paddingTop: Platform.OS === 'ios' ? 8 : 0,
    maxHeight: Platform.OS === 'ios' ? 50 : 60,

    position: 'absolute',
    bottom: 20,
    left: width * 0.05,
    right: width * 0.05,
  },
  blurView: {
    position: 'absolute',
    bottom: 20,
    left: width * 0.05,
    right: width * 0.05,
    maxHeight: Platform.OS === 'ios' ? 50 : 60,
    borderRadius: 10,
  },
});
