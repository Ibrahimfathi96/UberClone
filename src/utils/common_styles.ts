import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Colors} from './colors';
import {HP, SBR, SFZ, SH, SW} from './responsive';

// 44 - on iPhone X
// 20 - on iPhone iOS Device
// X - on Android Platform (runtime value)
// 0 - on all other platforms (default value)
// console.log(`getStatusBarHeight: ${getStatusBarHeight()} on ${Platform.OS}`);

// will be 0 on android, because you pass true to skipAndroidStatusBarHeight
// console.log(
//   `getStatusBarHeight: ${getStatusBarHeight(true)} on ${Platform.OS}`,
// );

const commonStyles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styledButton: {
    backgroundColor: Colors.button,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: SBR(12),
    borderWidth: 1,
    borderColor: Colors.button,
    height: HP(6),
    paddingHorizontal: SW(20),
    width: '100%',
  },
  title: {
    color: Colors.button,
    fontSize: SFZ(20),
    fontWeight: 'bold',
  },
  buttonTitle: {
    color: 'white',
    fontSize: SFZ(20),
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SH(-3),
  },
  statusBarHeight: {
    height: getStatusBarHeight(),
  },
  headerHeight: {
    height: HP(6),
  },
});

export default commonStyles;
