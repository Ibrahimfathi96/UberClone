import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from '@rneui/themed';
import {AppColors} from '../../utils/colors';
import {SFZ} from '../../utils/responsive';
import styles from './styles';

const AddressView = (props: any) => {
  const {addressTitle, addressDesc, noBorderWidth} = props;
  return (
    <View style={[styles.view5, noBorderWidth && styles.noBorder]}>
      <View style={styles.view6}>
        <View style={styles.view7}>
          <Icon
            type="material-community"
            name="map-marker"
            color={AppColors.black}
            size={SFZ(22)}
          />
        </View>
        <View>
          <Text style={styles.addressTitle}>{addressTitle}</Text>
          <Text style={styles.addressDesc}>{addressDesc}</Text>
        </View>
      </View>
      <View>
        <Icon
          type="material-community"
          name="chevron-right"
          color={AppColors.grey50}
          size={SFZ(26)}
        />
      </View>
    </View>
  );
};

export default AddressView;
