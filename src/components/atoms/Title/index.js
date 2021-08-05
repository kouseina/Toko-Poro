import {Divider, Layout, Text, useTheme} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';
import Gap from '../Gap';

const Title = ({text}) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Layout style={styles.wrapper}>
        <View style={styles.wrapperIcon}>
          <View style={styles.iconSecond} />
          <View style={styles.icon} />
        </View>
        <Gap width={17} />
        <Text
          style={[styles.text, {color: theme['color-basic-800']}]}
          category="h6">
          {text}
        </Text>
      </Layout>
      <Divider />
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    textTransform: 'uppercase',
    fontSize: 16,
  },
  icon: {
    height: 18,
    width: 18,
    backgroundColor: colors.primary,
    borderRadius: 18,
    borderColor: 'white',
    borderWidth: 2,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  wrapperIcon: {
    position: 'relative',
  },
  iconSecond: {
    height: 18,
    width: 18,
    backgroundColor: colors.secondary,
    borderRadius: 18,
    position: 'absolute',
    borderColor: 'white',
    borderWidth: 2,
    right: -7,
  },
  container: {
    marginBottom: 20,
  },
});
