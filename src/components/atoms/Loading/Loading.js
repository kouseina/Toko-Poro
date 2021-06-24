import React from 'react';
import {Layout, Spinner} from '@ui-kitten/components';

// style
import styles from './Loading.style';

const Index = () => {
  return (
    <Layout style={styles.container}>
      <Spinner status="info" />
    </Layout>
  );
};

export default Index;
