import {Platform, ScrollView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../utils/colors';
import {Icon} from '@rneui/themed';
import {SFZ} from '../../utils/responsive';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import FastImage from 'react-native-fast-image';
import {Images} from '../../utils/images';

const HomeScreen = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      {Platform.OS === 'ios' && <View style={styles.onlyIOSPaddingTop} />}
      <View style={styles.header}>
        <View style={styles.menuIconView}>
          <Icon
            type="material-community"
            name="menu"
            color={AppColors.white}
            size={SFZ(40)}
          />
        </View>
      </View>

      <ScrollView bounces={false}>
        <View style={styles.home}>
          <Text style={styles.title1}>{t('Destress your commute')}</Text>

          <View style={styles.view1}>
            <View style={styles.view8}>
              <Text style={styles.text2}>
                {t('Read a book, Take a nap, Stare out the window')}
              </Text>

              <View style={styles.btn1}>
                <Text style={styles.btn1Text}>{t('Ride with Uber')}</Text>
              </View>
            </View>

            <View>
              <FastImage style={styles.img1} source={Images.uberCar} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
