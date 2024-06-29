import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {filterData, IFilterData} from '../../utils/data';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const HomeServicesFlatlist = () => {
  const keyExtractor = (item: IFilterData) => item.id;
  const renderItem = ({item}: {item: IFilterData}) => (
    <View style={styles.card}>
      <View style={styles.view2}>
        <FastImage style={styles.image2} source={item.image} />
      </View>
      <View>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={filterData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeServicesFlatlist;