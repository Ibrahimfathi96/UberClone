import {StyleSheet} from 'react-native';
import {AppColors} from '../../utils/colors';
import commonStyles from '../../utils/common_styles';
import {SBR, SFZ, SH, SW} from '../../utils/responsive';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingBottom: SW(30),
  },
  onlyIOSPaddingTop: {
    height: getStatusBarHeight(),
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
  home: {
    backgroundColor: AppColors.blue,
    paddingLeft: SW(20),
  },
  title1: {
    color: AppColors.white,
    fontSize: SFZ(21),
    paddingBottom: SH(20),
    paddingTop: SH(20),
  },
  view1: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: SH(30),
  },
  view8: {
    flex: 4,
    marginTop: -SH(25),
  },
  btn1: {
    height: SH(40),
    width: SW(150),
    backgroundColor: AppColors.black,
    borderRadius: SBR(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SH(20),
  },
  text2: {
    fontSize: SFZ(16),
    color: AppColors.white,
  },
  btn1Text: {
    color: AppColors.white,
    fontSize: SFZ(17),
    marginTop: -SH(2),
  },
  img1: {
    height: SW(100),
    width: SH(100),
  },
});

export default styles;
