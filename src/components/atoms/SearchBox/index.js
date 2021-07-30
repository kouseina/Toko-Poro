import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Icon, Input} from '@ui-kitten/components';
import {colors} from '../../../utils';

const Index = ({value, onChangeText, onPressIn}) => {
  const RenderIconSearch = props => (
    <TouchableOpacity onPress={() => alert('hi')}>
      <Icon
        {...props}
        name="search"
        style={styles.icon}
        fill={colors.primary}
      />
    </TouchableOpacity>
  );

  return (
    <>
      <Input
        placeholder="Cari artikel..."
        value={value}
        onChangeText={onChangeText}
        accessoryLeft={RenderIconSearch}
        size="large"
        status="warning"
        style={styles.search}
        onSubmitEditing={() => alert('onKey')}
        onPressIn={onPressIn}
      />
    </>
  );
};

const styles = StyleSheet.create({
  search: {
    borderRadius: 7,
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Index;
