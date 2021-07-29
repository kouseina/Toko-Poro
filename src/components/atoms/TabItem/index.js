import {Icon} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const TabIcon = () => {
    if (title === 'Home') {
      return active ? (
        <Icon name="home-outline" fill="#FFAA00" style={styles.icon} />
      ) : (
        <Icon name="home-outline" fill="#FFE59E" style={styles.icon} />
      );
    }
    if (title === 'Trends') {
      return active ? (
        <Icon name="star-outline" fill="#FFAA00" style={styles.icon} />
      ) : (
        <Icon name="star-outline" fill="#FFE59E" style={styles.icon} />
      );
    }
    if (title === 'Crypto') {
      return active ? (
        <Icon name="bar-chart" fill="#FFAA00" style={styles.icon} />
      ) : (
        <Icon name="bar-chart" fill="#FFE59E" style={styles.icon} />
      );
    }
    if (title === 'Investment') {
      return active ? (
        <Icon name="trending-up" fill="#FFAA00" style={styles.icon} />
      ) : (
        <Icon name="trending-up" fill="#FFE59E" style={styles.icon} />
      );
    }
    return <Icon name="home-outline" fill="#FFAA00" style={styles.icon} />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <TabIcon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: active => ({
    fontSize: 12,
    color: active ? '#FFAA00' : '#FFE59E',
    marginTop: 4,
  }),
  icon: {
    width: 25,
    height: 25,
  },
});
