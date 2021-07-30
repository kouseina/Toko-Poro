import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useWindowDimensions} from 'react-native';
import {Carousel, ContentWrapper, Gap, SearchBox} from '../../components';

// style
import styles from './style';

const Home = () => {
  const {width} = useWindowDimensions();

  return (
    <ContentWrapper style={styles.page}>
      <ScrollView>
        <SearchBox />
        <Gap height={15} />
        <Carousel />
      </ScrollView>
    </ContentWrapper>
  );
};

export default Home;
