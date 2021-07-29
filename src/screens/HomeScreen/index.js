import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useWindowDimensions} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Icon, Layout, Text} from '@ui-kitten/components';

// style
import styles from './style';

const Home = () => {
  const {width} = useWindowDimensions();

  return (
    <Layout style={styles.page}>
      <ScrollView>
        <Text>Home Screen</Text>
      </ScrollView>
    </Layout>
  );
};

export default Home;
