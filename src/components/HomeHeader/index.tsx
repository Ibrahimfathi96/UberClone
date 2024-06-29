import {View, StatusBar, Platform} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icon} from '@rneui/themed';
import {AppColors} from '../../utils/colors';
import {SFZ} from '../../utils/responsive';

const HomeHeader = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={AppColors.blue} />
      {Platform.OS === 'ios' && <View style={styles.onlyIOSPaddingTop} />}
      <View style={styles.header}>
        <View style={styles.menuIconView}>
          <Icon
            type="material-community"
            name="menu"
            color={AppColors.white}
            size={SFZ(40)}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
