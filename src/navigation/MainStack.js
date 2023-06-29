import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { authNavigator, navigator } from './navigator';
import selector from '../redux/selector';

import AuthStack from './AuthStack';
import TabStack from './TabStack';
import { useSelector } from 'react-redux';
import UserCarListScreen from '../screens/OrderCleaning/UserCarListScreen';
import CleaningRecord from '../screens/PlanDetails/CleaningRecord';
import SubscribePackage from '../screens/OrderCleaning/SubscribePackage';
import RenewPackage from '../screens/OrderCleaning/RenewPackage';
import PaymentSucess from '../screens/OrderCleaning/PaymentSucess';
import CurrentPlanDetails from '../screens/PlanDetails/CurrentPlanDetails';
import UpcomingPlan from '../screens/PlanDetails/UpcomingPlan';
import EditCar from '../screens/EditCar';
import DemoOrder from '../screens/OrderCleaning/DemoOrder';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  const isUser = useSelector(selector.isUser);
  const token = useSelector(selector.token);

  // eslint-disable-next-line no-console
  console.log('token', token);

  if (!isUser) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={authNavigator.auth} component={AuthStack} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={navigator.dashBoard}
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name={navigator.home}
        component={TabStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={navigator.userCarList}
        component={UserCarListScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={navigator.cleaningRecord}
        component={CleaningRecord}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={navigator.subscribePackage}
        component={SubscribePackage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={navigator.renewPackage}
        component={RenewPackage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={navigator.demoOrder}
        component={DemoOrder}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={navigator.paymentSuccess}
        component={PaymentSucess}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={navigator.currentPlan}
        component={CurrentPlanDetails}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={navigator.upcomingPlans}
        component={UpcomingPlan}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={navigator.editCar}
        component={EditCar}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
