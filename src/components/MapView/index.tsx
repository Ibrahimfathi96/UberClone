import React, {useCallback, useEffect, useRef, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Platform, PermissionsAndroid, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {mapStyle} from '../../utils/common_styles';
import {carsAround} from '../../utils/data';
import {Images} from '../../utils/images';
import styles from './styles';
import {logger} from '../../utils/helpers';

const HomeMapView = () => {
  const _map = useRef<MapView>(null);

  const [latlng, setLatLng] = useState({});

  const askPermission = useCallback(() => {
    async () => {
      const permission = await requestLocationPermission();
      return permission;
    };
  }, []);

  const checkPermission = useCallback(() => {
    async () => {
      const hasPermission = await requestLocationPermission();
      if (hasPermission) {
        const permission = await askPermission();
        return permission;
      }
      return true;
    };
  }, [askPermission]);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      return true;
    }
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const getLocation = useCallback(() => {
    async () => {
      try {
        const hasPermission = await requestLocationPermission();
        if (!hasPermission) {
          return;
        }

        Geolocation.getCurrentPosition(
          position => {
            const {latitude, longitude} = position.coords;
            setLatLng({latitude, longitude});
          },
          error => {
            console.error(error);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } catch (err) {
        console.error(err);
      }
    };
  }, []);

  useEffect(() => {
    checkPermission();
    getLocation();
  }, [checkPermission, getLocation]);

  logger(latlng, 'location');

  return (
    <View style={styles.mapView}>
      <MapView
        ref={_map}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={mapStyle}
        showsUserLocation={true}
        followsUserLocation={true}
        paddingAdjustmentBehavior="always"
        mapType="standard"
        initialRegion={{
          ...carsAround[0],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {carsAround.map((item, index) => (
          <Marker coordinate={item} key={index.toString()}>
            <FastImage
              source={Images.carMarker}
              style={styles.carsAround}
              resizeMode={FastImage.resizeMode.contain}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default HomeMapView;
