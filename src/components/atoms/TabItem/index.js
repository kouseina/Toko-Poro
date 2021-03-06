import {Icon} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const TabIcon = () => {
    if (title === 'Home') {
      return active ? (
        <Icon name="home" fill={colors.primary} style={styles.icon} />
      ) : (
        <Icon name="home-outline" fill={colors.secondary} style={styles.icon} />
      );
    }
    if (title === 'Video') {
      return active ? (
        <Icon name="film" fill={colors.primary} style={styles.icon} />
      ) : (
        <Icon name="film-outline" fill={colors.secondary} style={styles.icon} />
      );
    }
    if (title === 'About') {
      return active ? (
        <Icon name="info" fill={colors.primary} style={styles.icon} />
      ) : (
        <Icon name="info-outline" fill={colors.secondary} style={styles.icon} />
      );
    }
    if (title === 'Investment') {
      return active ? (
        <Icon name="trending-up" fill={colors.primary} style={styles.icon} />
      ) : (
        <Icon name="trending-up" fill={colors.secondary} style={styles.icon} />
      );
    }
    return (
      <Icon name="home-outline" fill={colors.primary} style={styles.icon} />
    );
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <TabIcon />
      <Text
        style={[
          styles.text,
          {color: active ? colors.primary : colors.secondary},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: {
    fontSize: 12,
    marginTop: 4,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
