import {StyleSheet} from 'react-native';
import {HP, SBR, SH, SW} from '../../utils/responsive';

const styles = StyleSheet.create({
  mapView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '95%',
    height: HP(26),
    borderRadius: SBR(10),
  },
  carsAround: {
    width: SW(28),
    height: SH(14),
  },
});

export default styles;
