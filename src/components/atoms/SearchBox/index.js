import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Icon, Input} from '@ui-kitten/components';
import {colors} from '../../../utils';

const Index = ({
  value,
  onChangeText,
  onPressIn,
  autoFocus,
  onSubmitEditing,
}) => {
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
        placeholder="Find article..."
        value={value}
        onChangeText={onChangeText}
        accessoryLeft={RenderIconSearch}
        size="large"
        status="warning"
        style={styles.search}
        onSubmitEditing={onSubmitEditing}
        onPressIn={onPressIn}
        autoFocus={autoFocus}
      />
    </>
  );
};

const styles = StyleSheet.create({
  search: {
    borderRadius: 7,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Index;
