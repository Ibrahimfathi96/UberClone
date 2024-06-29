import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import HomeHeader from '../../components/HomeHeader';
import HomeBody from '../../components/HomeBody';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <HomeBody />
    </View>
  );
};

export default HomeScreen;
