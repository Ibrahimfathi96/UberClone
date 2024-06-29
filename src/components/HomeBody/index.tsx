import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import FastImage from 'react-native-fast-image';
import AppButton from '../AppButton';
import styles from './styles';
import {Images} from '../../utils/images';
import HomeServicesFlatlist from '../HomeServicesFlatlist';

const HomeBody = () => {
  const {t} = useTranslation();
  return (
    <ScrollView bounces={false}>
      <View style={styles.container}>
        <Text style={styles.text1}>{t('Destress your commute')}</Text>
        <View style={styles.view1}>
          <View style={styles.view2}>
            <Text style={styles.text2}>
              {t('Read a book, Take a nap, Stare out the window')}
            </Text>
            <AppButton onPress={() => {}} btnText={t('Ride with Uber')} />
          </View>
          <View>
            <FastImage style={styles.carUberImg} source={Images.uberCar} />
          </View>
        </View>
      </View>

      <HomeServicesFlatlist />
    </ScrollView>
  );
};

export default HomeBody;
