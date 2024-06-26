import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {logger} from '../../utils/helpers';
import {screenHeight, screenWidth} from '../../utils/responsive';

const SplashScreen = () => {
  logger(screenHeight, 'screenHeight');
  logger(screenWidth, 'screenWidth');

  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
