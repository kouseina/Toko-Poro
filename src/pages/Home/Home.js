import React from 'react';
import {ScrollView, SafeAreaView, Image} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {HeaderHome} from '../../components';

// style
import styles from './Home.style';

const Index = () => {
  return (
    <SafeAreaView style={styles.layout}>
      <ScrollView style={styles.layout}>
        <HeaderHome />
        <Layout style={styles.contentLayout}>
          <Text>
            Hello my name is Daffa Hello my name is Daffa Hello my name is Daffa
          </Text>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
