import {Layout} from '@ui-kitten/components';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useWindowDimensions} from 'react-native';
import {
  Carousel,
  ContentWrapper,
  Gap,
  ListCardNews,
  SearchBox,
  Title,
} from '../../components';

// style
import styles from './style';

const Home = () => {
  const {width} = useWindowDimensions();

  return (
    <ContentWrapper style={styles.page}>
      <Layout style={styles.searchBox}>
        <SearchBox />
      </Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel />
        <Gap height={20} />
        <Title text="latest videos" />
        <Gap height={20} />
        <Title text="trending news" />
        <ListCardNews />
        <Gap height={20} />
        <Title text="latest news" />
        <Gap height={20} />
        <Title text="blockchain" />
        <Gap height={20} />
        <Title text="latest tweets" />
      </ScrollView>
    </ContentWrapper>
  );
};

export default Home;
