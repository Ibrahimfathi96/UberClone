import {Dimensions, PixelRatio} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

const DESIGN_WIDTH = 394;
const DESIGN_HEIGHT = 846;

const getScalingFactor = (dimension: 'width' | 'height') => {
  const currentDeviceDimension = dimension === 'width' ? width : height;
  const designDimension = dimension === 'width' ? DESIGN_WIDTH : DESIGN_HEIGHT;
  return currentDeviceDimension / designDimension;
};

const ScaleWidth = (value: number) => value * getScalingFactor('width');
const ScaleHeight = (value: number) => value * getScalingFactor('height');

const scalingBorderRadius = (value: number) =>
  value * Math.min(getScalingFactor('width'), getScalingFactor('height'));

const scalingFontSize = (value: number) =>
  PixelRatio.roundToNearestPixel(value * getScalingFactor('height'));

const responsivePaddingWidth = (padding: number) =>
  PixelRatio.roundToNearestPixel(padding * getScalingFactor('width'));

const responsivePaddingHeight = (padding: number) =>
  PixelRatio.roundToNearestPixel(padding * getScalingFactor('height'));

const responsiveMarginWidth = (margin: number) =>
  PixelRatio.roundToNearestPixel(margin * getScalingFactor('width'));

const responsiveMarginHeight = (margin: number) =>
  PixelRatio.roundToNearestPixel(margin * getScalingFactor('height'));

export const Spacings = {
  wSpace: width * 0.12,
  wSpace1: width * 0.1,
  wSpace2: width * 0.08,
  wSpace3: width * 0.06,
  wSpace4: width * 0.04,
  wSpace5: width * 0.035,
  wSpace6: width * 0.03,
  wSpace7: width * 0.025,
  wSpace8: width * 0.02,
  wSpace9: width * 0.01,
  hSpace1: height * 0.1,
  hSpace2: height * 0.08,
  hSpace3: height * 0.06,
  hSpace4: height * 0.05,
  hSpace5: height * 0.04,
  hSpace6: height * 0.035,
  hSpace7: height * 0.03,
  hSpace8: height * 0.02,
  hSpace9: height * 0.01,
  hSpace10: height * 0.002,
  borderWidth: width * 0.002,
};

export const screenHeight = height;
export const screenWidth = width;
export const SP = Spacings;
export const SF = getScalingFactor;
export const HP = hp;
export const WP = wp;
export const SW = (value: number) => ScaleWidth(value);
export const SH = (value: number) => ScaleHeight(value);
export const SBR = scalingBorderRadius;
export const SFZ = scalingFontSize;
export const RPW = responsivePaddingWidth;
export const RPH = responsivePaddingHeight;
export const RMW = responsiveMarginWidth;
export const RMH = responsiveMarginHeight;
