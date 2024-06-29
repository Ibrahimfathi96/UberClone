import {SafeAreaView, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {Images} from '../../utils/images';
import {AppColors} from '../../utils/colors';
import {ISplashScreenProps} from '../../utils/types';

const SplashScreen = (props: ISplashScreenProps) => {
  const {navigation} = props;
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('BottomNavigations');
    }, 3000);
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.black} />
      <FastImage
        source={Images.whiteLogo}
        style={styles.logo}
        resizeMode={FastImage.resizeMode.contain}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
