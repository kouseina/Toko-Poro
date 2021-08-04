import {useNavigation} from '@react-navigation/native';
import {Card, Layout} from '@ui-kitten/components';
import React from 'react';
import {SafeAreaView, ScrollView, Dimensions, View} from 'react-native';
import RenderHTML from 'react-native-render-html';
import WebView from 'react-native-webview';
import YoutubeIframe from 'react-native-youtube-iframe';
import {
  Carousel,
  ContentWrapper,
  Gap,
  LabelCategory,
  ListCardBlockChain,
  ListCardNews,
  ListCardNewsWithDesc,
  SearchBox,
  Title,
} from '../../components';
import {API_URL} from '@env';

// style
import styles from './style';
import axios from 'axios';

const Home = () => {
  const width = Dimensions.get('window').width - 50;
  const source =
    '<a class="twitter-timeline" href="https://twitter.com/fintexnews?ref_src=twsrc%5Etfw">Tweets by fintexnews</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
  const navigation = useNavigation();

  const [contentScroll, setContentScroll] = React.useState({});

  React.useEffect(() => {
    axios.get(`${API_URL}/api/post`).then(res => {
      console.log('response: ', res.data.data);
    });
  }, []);

  return (
    <ContentWrapper style={styles.page}>
      <Layout style={styles.searchBox}>
        <SearchBox onPressIn={() => navigation.navigate('Search')} />
      </Layout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={contentScroll}>
        <Carousel />
        <Gap height={20} />
        <Title text="latest videos" />
        <YoutubeIframe videoId={'Zio45UcKkNM'} height={200} />
        <Gap height={20} />
        <Title text="trending news" />
        <ListCardNews />
        <Gap height={20} />
        <Title text="latest news" />
        <Gap height={15} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={[styles.wrapper, styles.flexWrap]}>
            <LabelCategory text="investment" />
            <LabelCategory text="market" />
            <LabelCategory text="article" />
            <LabelCategory text="fashion" />
            <LabelCategory text="crypthograpy" />
            <LabelCategory text="foto" />
          </View>
        </ScrollView>
        <ListCardNewsWithDesc />
        <Gap height={20} />
        <Title text="blockchain" />
        <ListCardBlockChain />
        <Gap height={20} />
        <Title text="latest tweets" />
        <Gap height={20} />
        <Card>
          <ScrollView
            onTouchStart={ev => {
              setContentScroll({content: {flex: 1}});
            }}
            onMomentumScrollEnd={e => {
              setContentScroll({content: {}});
            }}
            onScrollEndDrag={e => {
              setContentScroll({content: {}});
            }}
            style={{margin: 10, maxHeight: 600}}>
            <WebView
              source={{html: source}}
              javaScriptEnabled={true}
              style={{height: 600, width: width}}
            />
          </ScrollView>
        </Card>
      </ScrollView>
    </ContentWrapper>
  );
};

export default Home;
