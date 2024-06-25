import {LogBox, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import BleManager from 'react-native-ble-manager';
import commonStyles from './src/utils/common_styles';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/i18n';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/store';
import {Provider} from 'react-redux';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
    BleManager.start({showAlert: false});
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <View style={commonStyles.centeredContainer}>
            <Text>Uber Clone</Text>
          </View>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
