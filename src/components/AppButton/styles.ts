import {StyleSheet} from 'react-native';
import {AppColors} from '../../utils/colors';
import {SBR, SFZ, SH, SW} from '../../utils/responsive';

const styles = StyleSheet.create({
  btn: {
    height: SH(40),
    width: SW(150),
    backgroundColor: AppColors.black,
    borderRadius: SBR(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SH(20),
  },
  btnText: {
    color: AppColors.white,
    fontSize: SFZ(17),
    marginTop: -SH(2),
  },
});

export default styles;
