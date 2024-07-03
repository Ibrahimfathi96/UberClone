import {Text, ScrollView} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import styles from './styles';
import HomeServicesFlatlist from '../HomeServicesFlatlist';
import HomeMapView from '../MapView';
import WhereToView from './WhereToView';
import HomeUpperView from './HomeUpperView';
import AddressView from './AddressView';

const HomeBody = () => {
  const {t} = useTranslation();

  return (
    <ScrollView
      scrollEnabled
      bounces={false}
      contentContainerStyle={styles.scrollingContainer}
      showsVerticalScrollIndicator={false}>
      <HomeUpperView />

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

      <HomeMapView />
    </ScrollView>
  );
};

export default HomeBody;
