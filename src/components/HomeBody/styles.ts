import {StyleSheet} from 'react-native';
import {AppColors} from '../../utils/colors';
import {HP, SBR, SFZ, SH, SW} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.blue,
    paddingLeft: SW(20),
  },
  scrollingContainer: {
    paddingBottom: HP(10),
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
  view3: {
    flexDirection: 'row',
    marginTop: SH(5),
    height: SH(50),
    backgroundColor: AppColors.grey600,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: SW(15),
    borderRadius: SBR(10),
  },
  text3: {
    marginLeft: SW(15),
    fontSize: SFZ(20),
    color: AppColors.black,
  },

  view4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SW(15),
    backgroundColor: 'white',
    paddingHorizontal: SW(10),
    paddingVertical: SH(2),
    borderRadius: SBR(10),
  },
  now: {
    marginLeft: SW(5),
  },
  view5: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: SH(25),
    justifyContent: 'space-between',
    marginHorizontal: SW(15),
    borderBottomColor: AppColors.grey400,
    borderBottomWidth: 1,
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  view6: {
    flex: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  view7: {
    backgroundColor: AppColors.grey600,
    height: SH(40),
    width: SW(40),
    borderRadius: SBR(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SW(20),
  },
  addressTitle: {
    fontSize: SFZ(18),
    color: AppColors.black,
  },
  addressDesc: {
    color: AppColors.grey300,
  },
  aroundYou: {
    fontSize: SFZ(20),
    color: AppColors.black,
    marginLeft: SW(20),
    marginBottom: SH(20),
  },
});

export default styles;
