import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import FastImage from 'react-native-fast-image';
import AppButton from '../AppButton';
import styles from './styles';
import {Images} from '../../utils/images';
import HomeServicesFlatlist from '../HomeServicesFlatlist';
import {Icon} from '@rneui/themed';
import {AppColors} from '../../utils/colors';
import {SFZ} from '../../utils/responsive';

const HomeBody = () => {
  const {t} = useTranslation();
  return (
    <ScrollView bounces={false}>
      <HomeUpperView />

      {/**TODO: FIX THE IMAGE INSIDE THE CARD */}
      <HomeServicesFlatlist />

      <WhereToView />

      <AddressView
        addressTitle="10th Ibrahim El-attar Street"
        addressDesc="Zagazig-Banayous"
      />

      <AddressView
        addressTitle="El Bosta Street"
        addressDesc="Zagazig-Train Station"
        noBorderWidth
      />

      <Text style={styles.aroundYou}>{t('Around you')}</Text>
    </ScrollView>
  );
};

export default HomeBody;

const HomeUpperView = () => {
  const {t} = useTranslation();

  return (
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
  );
};

const WhereToView = () => {
  const {t} = useTranslation();

  return (
    <View style={styles.view3}>
      <Text style={styles.text3}>{t('Where to ?')}</Text>
      <View style={styles.view4}>
        <Icon
          type="material-community"
          name="clock-time-four"
          color={AppColors.grey100}
          size={SFZ(26)}
        />

        <Text style={styles.now}>{t('Now')}</Text>

        <Icon
          type="material-community"
          name="chevron-down"
          color={AppColors.grey100}
          size={SFZ(26)}
        />
      </View>
    </View>
  );
};

const AddressView = (props: any) => {
  const {addressTitle, addressDesc, noBorderWidth} = props;
  return (
    <View style={[styles.view5, noBorderWidth && styles.noBorder]}>
      <View style={styles.view6}>
        <View style={styles.view7}>
          <Icon
            type="material-community"
            name="map-marker"
            color={AppColors.black}
            size={SFZ(22)}
          />
        </View>
        <View>
          <Text style={styles.addressTitle}>{addressTitle}</Text>
          <Text style={styles.addressDesc}>{addressDesc}</Text>
        </View>
      </View>
      <View>
        <Icon
          type="material-community"
          name="chevron-right"
          color={AppColors.grey50}
          size={SFZ(26)}
        />
      </View>
    </View>
  );
};
