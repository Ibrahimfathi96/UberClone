import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid, Platform} from 'react-native';
import {Toast, ToastOptions} from 'react-native-toast-notifications';
import {ShadowStyleProps} from './types';
import {ViewStyle} from 'react-native';
import {AppColors} from './colors';

// export const logger = item => {
//   if (__DEV__) {
//     console.log(util.inspect(item, {depth: 5, colors: true}));
//   }
// };
export const logger = (value: any, message: string = '') => {
  console.log(message && message + '  ::\n\n', JSON.stringify(value, null, 4));
};

export const showToast = (
  message: string,
  placement?: 'center' | 'top' | 'bottom' | undefined,
  options?: ToastOptions,
) => {
  const defaultOptions: ToastOptions = {
    type: 'success',
    duration: 3000,
    placement: placement ? placement : 'top',
  };

  const toastOptions = options
    ? {...defaultOptions, ...options}
    : defaultOptions;
  Toast.show(message, toastOptions);
};

export const getShadowStyle = ({
  color = AppColors.black,
  elevation = 5,
}: ShadowStyleProps = {}): ViewStyle => {
  return {
    shadowColor: color,
    shadowOffset: {
      width: 0,
      height: elevation / 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: elevation * 0.76,

    elevation: elevation,
  };
};

// locationUtils
export const requestLocationPermission = async () => {
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

export const getCurrentLocation = async () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        resolve(position.coords);
      },
      error => {
        reject(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });
};
