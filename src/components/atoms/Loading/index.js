import React from 'react';
import {Layout, Spinner} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const Index = () => {
  return (
    <Layout style={styles.container}>
      <Spinner status="info" />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Index;
