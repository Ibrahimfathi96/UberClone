import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';
import {SH, SW} from '../../utils/responsive';
import {ISvgIconsProps} from '../../utils/types';
import {AppColors} from '../../utils/colors';

const ActivitySvg = (props: ISvgIconsProps) => {
  const {width = SW(24), height = SH(24), focused = false} = props;
  return (
    <Svg width={width} height={height} viewBox="-10 -5 1034 1034" {...props}>
      <Path
        fill={focused ? AppColors.black : AppColors.black40}
        d="M251 226h-4h-8l-18 3l-15 4l-20 8l-16 9l-15 10q-13 11 -23 24l-4 5q-4 7 -8 13l-5 9l-8 21l-4 14v0q-2 12 -3 23v514l1 11l4 19q2 9 5 17l8 17q9 16 21 29l3 3q7 8 16 15l6 4q7 5 15 10l17 7l25 8l22 3h514l19 -2l11 -3q9 -2 17 -6l10 -4q12 -6 22 -13l6 -4q9 -7 16 -15 l3 -3q13 -14 22 -32l7 -14q3 -8 5 -17l4 -19q1 -9 1 -19v-502q0 -10 -2 -19l-1 -8l-4 -14v0q-2 -9 -6 -17l-7 -13l-8 -12l-4 -6q-10 -13 -23 -24l-6 -4l-15 -10l-13 -7q-8 -4 -17 -6l-15 -4l-18 -3h-8h-502zM393 380q28 0 58 8q18 4 50 16l12 4q35 13 52 17q28 6 55 3 q31 -3 68 -19q20 -8 37.5 -4t24.5 21.5t0 35.5t-25 26q-64 27 -122 27q-25 0 -51 -8q-16 -5 -45 -17l-24 -9q-34 -12 -51 -16q-27 -5 -52 -1q-29 5 -64 25q-19 9 -37 7t-27 -18.5t-3.5 -35t22.5 -28.5q63 -34 122 -34zM387 560h3q28 0 57 8q18 4 49 16l13 4q35 13 53 17 q29 6 56 3q33 -4 72 -21q19 -9 36.5 -5t25 21t0.5 35t-24 26q-68 30 -129 30q-25 0 -52 -7q-16 -5 -45 -17l-24 -9q-34 -13 -50 -16q-26 -5 -51 -1q-29 5 -64 23q-18 10 -36 7.5t-27 -19t-3.5 -35t22.5 -27.5q61 -33 118 -33zM384 738q27 0 57 8q17 5 49 16l12 5 q37 13 55 17q29 6 58 2q33 -4 74 -23q19 -9 36.5 -5.5t25.5 20.5t1.5 34.5t-23.5 25.5q-73 34 -137 34q-25 0 -51 -8q-16 -5 -45 -17l-24 -9q-32 -12 -48 -15q-26 -6 -50 -2q-28 4 -62 21q-18 9 -36 6.5t-26.5 -19.5t-2.5 -35t23 -27q56 -28 109 -29h5z"
      />
    </Svg>
  );
};

export default memo(ActivitySvg);
