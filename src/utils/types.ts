import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/navigation_types';
import {PropsWithChildren} from 'react';
import {ColorValue, StatusBarStyle, ViewStyle} from 'react-native';

export interface IGeneralState {
  token: string | null;
  tokenExpiration: string | null;
  user: any;
  appLanguage: string;
  userIsCreated: boolean;
  firstTimeAppInstall: boolean;
  loginAsAGuest: boolean;
  loading: boolean;
}

export type ShadowStyleProps = {
  color?: string;
  elevation?: number;
};

export type ISvgIconsProps = {
  width?: number;
  height?: number;
  color?: string;
  onPress?: () => void;
  focused?: boolean;
};

export type ISplashScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SplashScreen'>;
};

export type ISafeAreaLayoutProps = PropsWithChildren<{
  containerStyle?: ViewStyle;
  barStyle?: StatusBarStyle | null | undefined;
  statusBarBackgroundColor?: ColorValue | undefined;
  isTranslucent?: boolean | undefined;
}>;
