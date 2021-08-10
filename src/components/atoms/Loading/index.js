import React from 'react';
import {Layout, Spinner} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const Index = () => {
  return (
    <Layout style={styles.container}>
      <Spinner status="warning" />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
});

export default Index;
