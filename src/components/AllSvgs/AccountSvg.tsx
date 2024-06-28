import Svg, {Path} from 'react-native-svg';
import React from 'react';
import {ISvgIconsProps} from '../../utils/types';
import {SH, SW} from '../../utils/responsive';
import {Colors} from '../../utils/colors';

const AccountSvg = (props: ISvgIconsProps) => {
  const {width = SW(24), height = SH(24), focused = false} = props;
  return (
    <Svg
      fill={focused ? Colors.black : Colors.black50}
      width={width}
      height={height}
      viewBox="-3 0 19 19"
      {...props}>
      <Path d="M12.517 12.834v1.9a1.27 1.27 0 0 1-1.267 1.267h-9.5a1.27 1.27 0 0 1-1.267-1.267v-1.9A3.176 3.176 0 0 1 3.65 9.667h5.7a3.176 3.176 0 0 1 3.167 3.167zM3.264 5.48A3.236 3.236 0 1 1 6.5 8.717a3.236 3.236 0 0 1-3.236-3.236z" />
    </Svg>
  );
};

export default AccountSvg;
