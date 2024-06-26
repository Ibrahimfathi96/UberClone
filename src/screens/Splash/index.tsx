import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {logger} from '../../utils/helpers';
import {screenHeight, screenWidth} from '../../utils/responsive';
import FastImage from 'react-native-fast-image';
import {Images} from '../../utils/images';

const SplashScreen = () => {
  logger(screenHeight, 'screenHeight');
  logger(screenWidth, 'screenWidth');

  return (
    <View style={styles.container}>
      <FastImage
        source={Images.whiteLogo}
        style={styles.logo}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export default SplashScreen;
