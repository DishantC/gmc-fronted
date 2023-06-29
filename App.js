import React, { createRef, useEffect, useState } from 'react';
import { TextInput, Text } from 'react-native';
import { Provider } from 'react-redux';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import configureStore from './src/redux/store';
import SplashScreen from './src/screens/SplashScreen';
import MainStack from './src/navigation/MainStack';
import color from './src/theme/color';

export const { store, persistor } = configureStore();
export const navigationRef = createRef();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3200);
  }, []);

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: color.white,
    },
  };

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.maxFontSizeMultiplier = 1;
  TextInput.defaultProps = Text.defaultProps || {};
  TextInput.defaultProps.maxFontSizeMultiplier = 1;

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer theme={navigationTheme} ref={navigationRef}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              {showSplash ? <SplashScreen /> : <MainStack />}
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
