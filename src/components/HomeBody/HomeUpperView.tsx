import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Images} from '../../utils/images';
import AppButton from '../AppButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {HomeStackParamList} from '../../navigation/navigation_types';
import {StackNavigationProp} from '@react-navigation/stack';

const HomeUpperView = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{t('Destress your commute')}</Text>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Text style={styles.text2}>
            {t('Read a book, Take a nap, Stare out the window')}
          </Text>

          <AppButton
            onPress={() => navigation.navigate('RequestRide')}
            btnText={t('Ride with Uber')}
          />
        </View>

        <View>
          <FastImage style={styles.carUberImg} source={Images.uberCar} />
        </View>
      </View>
    </View>
  );
};

export default HomeUpperView;
