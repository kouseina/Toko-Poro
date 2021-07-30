import React from 'react';
import {Layout} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const ContentWrapper = props => {
  const {children} = props;

  return <Layout style={styles.wrapper}>{children}</Layout>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 25,
  },
});

export default ContentWrapper;
