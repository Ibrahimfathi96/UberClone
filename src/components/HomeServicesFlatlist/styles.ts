import {StyleSheet} from 'react-native';
import {AppColors} from '../../utils/colors';
import {SBR, screenWidth, SFZ, SH, SW} from '../../utils/responsive';

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    marginVertical: screenWidth / 22,
    marginHorizontal: screenWidth / 20,
  },
  imgView: {
    backgroundColor: AppColors.grey600,
    borderRadius: SBR(10),
  },
  image: {
    height: SH(50),
    width: SW(50),
    margin: SH(4),
  },
  title: {
    color: AppColors.black,
    fontSize: SFZ(16),
  },
});

export default styles;
