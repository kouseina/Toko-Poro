import {Card, Layout} from '@ui-kitten/components';
import React from 'react';
import {SafeAreaView, ScrollView, Dimensions} from 'react-native';
import WebView from 'react-native-webview';
import YoutubeIframe from 'react-native-youtube-iframe';
import {
  Carousel,
  ContentWrapper,
  Gap,
  ListCardBlockChain,
  ListCardNews,
  ListCardNewsWithDesc,
  SearchBox,
  Title,
} from '../../components';

// style
import styles from './style';

const Home = () => {
  const width = Dimensions.get('window').width - 50;
  // let JS =
  //   '<script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>';
  // let source =
  //   JS +
  //   '<blockquote class="twitter-tweet" data-lang="es"><p lang="en" dir="ltr">8 TED Talks to inspire projects with kids: <a href="https://twitter.com/TEDTalks/status/758116657638309896">https://twitter.com/TEDTalks/status/758116657638309896</a> <a href="https://twitter.com/TEDTalks/status/758116657638309896">pic.twitter.com/HMmYAeP7Km</a></p>&mdash; TED Talks (@TEDTalks) <a href="https://twitter.com/TEDTalks/status/758116657638309896">27 de julio de 2016</a></blockquote>';

  const source =
    '<a class="twitter-timeline" href="https://twitter.com/fintexnews?ref_src=twsrc%5Etfw">Tweets by fintexnews</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

  const [contentScroll, setContentScroll] = React.useState({});

  return (
    <ContentWrapper style={styles.page}>
      <Layout style={styles.searchBox}>
        <SearchBox />
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
