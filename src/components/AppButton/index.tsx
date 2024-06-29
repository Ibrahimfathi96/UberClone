import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {IAppButtonProps} from '../../utils/types';
import {useTranslation} from 'react-i18next';

const AppButton = (props: IAppButtonProps) => {
  const {btnText, btnStyle, btnTextStyle, onPress} = props;
  const {t} = useTranslation();
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, btnStyle]}>
      <Text style={[styles.btnText, btnTextStyle]}>{t(btnText)}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
