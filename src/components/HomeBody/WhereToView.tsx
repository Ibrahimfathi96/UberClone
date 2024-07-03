import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text} from 'react-native';
import {Icon} from '@rneui/themed';
import {AppColors} from '../../utils/colors';
import {SFZ} from '../../utils/responsive';
import styles from './styles';

const WhereToView = () => {
  const {t} = useTranslation();

  return (
    <View style={styles.view3}>
      <Text style={styles.text3}>{t('Where to ?')}</Text>
      <View style={styles.view4}>
        <Icon
          type="material-community"
          name="clock-time-four"
          color={AppColors.grey100}
          size={SFZ(26)}
        />

        <Text style={styles.now}>{t('Now')}</Text>

        <Icon
          type="material-community"
          name="chevron-down"
          color={AppColors.grey100}
          size={SFZ(26)}
        />
      </View>
    </View>
  );
};

export default WhereToView;
