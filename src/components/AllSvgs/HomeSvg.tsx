import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {ISvgIconsProps} from '../../utils/types';
import {Colors} from '../../utils/colors';
import {SH, SW} from '../../utils/responsive';

const HomeSvg = (props: ISvgIconsProps) => {
  const {
    width = SW(24),
    height = SH(24),
    color = Colors.black,
    focused = false,
  } = props;
  return (
    <Svg width={width} height={height} viewBox="-0.5 0 34 34" {...props}>
      <G
        id="icons"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd">
        <G
          id="ui-gambling-website-lined-icnos-casinoshunter"
          transform="translate(-1383.000000, -153.000000)"
          fill={color ?? focused ? Colors.black : Colors.grey100}
          fillRule="nonzero">
          <G transform="translate(1350.000000, 120.000000)">
            <Path
              d="M35.0026185,49.8218969 C33.8966028,49.8218969 33,48.9673526 33,47.9132188 C33,47.386939 33.2279956,46.884013 33.6300945,46.5233194 L48.1274731,33.5187787 C48.8985814,32.8270738 50.1014129,32.8270738 50.8725211,33.5187787 L65.3698998,46.5233194 C66.1753004,47.2457855 66.2137066,48.4537391 65.4556825,49.2213594 C65.0772365,49.6045963 64.5495577,49.8218969 63.9973758,49.8218969 L63.5183266,49.8218969 L63.5183266,63.1826438 C63.5183266,65.2909114 61.7251209,67 59.5130896,67 L55.5039249,67 C53.8470706,67 52.5039249,65.6568542 52.5039249,64 L52.5039249,57.4566094 L52.5039249,57.4566094 C52.5039249,56.4443825 51.6743634,55.6094251 50.6488932,55.5523934 L50.5013064,55.5479313 L48.4986879,55.5479313 C47.4366417,55.5479313 46.5605898,56.3385791 46.5007511,57.3159457 L46.4960694,57.4566094 L46.4960694,64 C46.4960694,65.6568542 45.1529236,67 43.4960694,67 L39.4869047,67 L39.4869047,67 C37.2748734,67 35.4816677,65.2909114 35.4816677,63.1826438 L35.4816677,49.8218969 L35.0026185,49.8218969 Z"
              id="home"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default HomeSvg;
