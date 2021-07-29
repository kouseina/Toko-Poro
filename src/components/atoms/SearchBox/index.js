import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Input} from '@ui-kitten/components';

const Index = ({value, onChangeText}) => {
  const RenderIconSearch = props => (
    <Icon {...props} name="search" style={styles.icon} fill="#FFF" />
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

const styles = StyleSheet.create({
  search: {
    borderRadius: 7,
    flex: 1,
    marginRight: 18,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Index;
