import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {Images} from '../../utils/images';
import {Colors} from '../../utils/colors';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
      <FastImage
        source={Images.whiteLogo}
        style={styles.logo}
        resizeMode={FastImage.resizeMode.contain}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
