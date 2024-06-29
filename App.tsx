import {LogBox} from 'react-native';
import React, {useEffect} from 'react';
import BleManager from 'react-native-ble-manager';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/i18n';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
    BleManager.start({showAlert: false});
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={false} persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            <NavigationContainer>
              <AppNavigation />
            </NavigationContainer>
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
