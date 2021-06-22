import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Input} from '@ui-kitten/components';

// style
import styles from './SearchBox.style';
import {colors} from '../../../utils';

const Index = ({value, onChangeText}) => {
  const RenderIconSearch = props => (
    <Icon {...props} name="search" style={styles.icon} fill={colors.white} />
  );

  return (
    <Input
      placeholder="Cari barang kamu disini.."
      value={value}
      onChangeText={onChangeText}
      accessoryLeft={RenderIconSearch}
      size="large"
      status="control"
      style={styles.search}
    />
  );
};

export default Index;
