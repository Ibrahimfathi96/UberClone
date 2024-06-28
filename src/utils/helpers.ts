import {Toast, ToastOptions} from 'react-native-toast-notifications';
import {ShadowStyleProps} from './types';
import {ViewStyle} from 'react-native';
import {Colors} from './colors';

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
  color = Colors.black,
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
