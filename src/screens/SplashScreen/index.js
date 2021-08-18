import {useNavigation} from '@react-navigation/core';
import {Layout} from '@ui-kitten/components';
import React from 'react';
import {Image} from 'react-native';

import styles from './style';

const SplashScreen = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 1500);
  }, []);

  return (
    <Layout style={styles.page}>
      <Image source={require('../../assets/dummy/logo.png')} />
    </Layout>
  );
};

export default SplashScreen;
