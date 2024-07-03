import {View, Text} from 'react-native';
import React from 'react';
import SafeAreaLayout from '../../components/SafeAreaLayout';
import styles from './styles';

const RequestRideScreen = () => {
  return (
    <SafeAreaLayout>
      <View style={styles.container}>
        <Text>RequestRideScreen</Text>
      </View>
    </SafeAreaLayout>
  );
};

export default RequestRideScreen;
