import {SafeAreaView, StatusBar} from 'react-native';
import React, {memo} from 'react';
import {ISafeAreaLayoutProps} from '../../utils/types';
import styles from './styles';
import {AppColors} from '../../utils/colors';

const SafeAreaLayout = (props: ISafeAreaLayoutProps) => {
  const {
    children,
    containerStyle,
    barStyle = 'dark-content',
    statusBarBackgroundColor = AppColors.white,
    isTranslucent = false,
  } = props;
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={statusBarBackgroundColor}
        translucent={isTranslucent}
      />
      {children}
    </SafeAreaView>
  );
};

export default memo(SafeAreaLayout);
