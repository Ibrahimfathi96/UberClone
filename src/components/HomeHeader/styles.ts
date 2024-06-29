import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {AppColors} from '../../utils/colors';
import commonStyles from '../../utils/common_styles';
import {SH, SW} from '../../utils/responsive';

const styles = StyleSheet.create({
  onlyIOSPaddingTop: {
    height: getStatusBarHeight() + SH(20),
    backgroundColor: AppColors.blue,
  },
  header: {
    ...commonStyles.headerHeight,
    backgroundColor: AppColors.blue,
    alignItems: 'flex-start',
  },
  menuIconView: {
    marginLeft: SW(10),
    marginTop: SH(5),
  },
});

export default styles;
