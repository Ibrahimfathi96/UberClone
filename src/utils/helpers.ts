import {Toast, ToastOptions} from 'react-native-toast-notifications';

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
