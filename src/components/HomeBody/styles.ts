import {StyleSheet} from 'react-native';
import {AppColors} from '../../utils/colors';
import {SFZ, SH, SW} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.blue,
    paddingLeft: SW(20),
  },
  text1: {
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
  view2: {
    flex: 4,
    marginTop: -SH(25),
  },
  text2: {
    fontSize: SFZ(16),
    color: AppColors.white,
  },
  carUberImg: {
    height: SW(100),
    width: SH(100),
  },
});

export default styles;
