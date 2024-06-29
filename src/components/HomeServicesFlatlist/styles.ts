import {StyleSheet} from 'react-native';
import {AppColors} from '../../utils/colors';
import {SBR, screenWidth, SFZ, SH, SW} from '../../utils/responsive';

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: screenWidth / 22,
  },
  view2: {
    marginBottom: SH(5),
    borderRadius: SBR(15),
    backgroundColor: AppColors.grey600,
  },
  image2: {
    height: SH(60),
    width: SW(60),
    borderRadius: SBR(30),
  },
  title: {
    color: AppColors.black,
    fontSize: SFZ(16),
  },
});

export default styles;
