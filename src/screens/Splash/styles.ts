import {StyleSheet} from 'react-native';
import commonStyles from '../../utils/common_styles';
import {AppColors} from '../../utils/colors';
import {SH, SW} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.centeredContainer,
    backgroundColor: AppColors.black,
  },
  logo: {
    width: SW(200),
    height: SH(200),
    resizeMode: 'contain',
  },
});

export default styles;
