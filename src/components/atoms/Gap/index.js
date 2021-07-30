import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';

const Gap = ({width, height}) => {
  return <View style={styles({height: height, width: width}).container} />;
};

const styles = ({width, height}) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
    },
  });

export default Gap;
