import {useNavigation} from '@react-navigation/native';
import {Card, Spinner} from '@ui-kitten/components';
import React from 'react';
import {ScrollView, Dimensions, View} from 'react-native';
import WebView from 'react-native-webview';
import Youtube from 'react-native-youtube';
import {
  Carousel,
  ContentWrapper,
  Gap,
  LabelCategory,
  ListCardBlockChain,
  ListCardNews,
  ListCardNewsWithDesc,
  SearchBox,
  SelectLanguage,
  Title,
} from '../../components';
import {API_URL} from '@env';
import axios from 'axios';

// style
import styles from './style';

const Home = () => {
  const width = Dimensions.get('window').width - 50;
  const source =
    '<a class="twitter-timeline" href="https://twitter.com/fintexnews?ref_src=twsrc%5Etfw">Tweets by fintexnews</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
  const navigation = useNavigation();

  const [loading, setLoading] = React.useState(false);
  const [offsetScroll, setOffsetScroll] = React.useState(0);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setLoading(true);
      axios
        .get(`${API_URL}/api/post`)
        .then(res => {
          console.log('response: ', res.data.data.indonesia);
        })
        .catch(e => console.log(e))
        .finally(() => setLoading(false));
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const handleScroll = event => {
    // console.log(event.nativeEvent.contentOffset.y);
    setOffsetScroll(event.nativeEvent.contentOffset.y);
  };

  return (
    <ContentWrapper style={styles.page}>
      <View style={styles.wrapper}>
        <View style={styles.searchBox}>
          <SearchBox onPressIn={() => navigation.navigate('Search')} />
        </View>
        <SelectLanguage />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} onScroll={handleScroll}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Carousel />
            <Gap height={20} />
            <Title text="latest videos" />
            <Youtube
              videoId={'Zio45UcKkNM'}
              height={200}
              apiKey="AIzaSyB0i7-wSUyCqUuGTDYsVUzrEVcZPygiY5E"
            />
            <Gap height={20} />
            <Title text="trending news" />
            <ListCardNews />
            <Title text="latest news" />
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
            <Title text="blockchain" />
            <ListCardBlockChain />
            <Title text="latest tweets" />
            {/* <Card>
              <WebView
                source={{html: source}}
                javaScriptEnabled={true}
                style={{height: 600, width: width}}
              />
            </Card> */}

            {/* {offsetScroll >= 80 ? (
              <>
                <Title text="latest news" />
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
                <Title text="blockchain" />
                <ListCardBlockChain />
                <Title text="latest tweets" />
                <Card>
                  <WebView
                    source={{html: source}}
                    javaScriptEnabled={true}
                    style={{height: 600, width: width}}
                  />
                </Card>
              </>
            ) : (
              <Spinner />
            )} */}
          </>
        )}
      </ScrollView>
    </ContentWrapper>
  );
};

export default Home;
