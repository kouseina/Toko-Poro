import {useNavigation} from '@react-navigation/native';
import {Card, IndexPath} from '@ui-kitten/components';
import React from 'react';
import {ScrollView, Dimensions, View, RefreshControl} from 'react-native';
import WebView from 'react-native-webview';
import {Thumbnail} from 'react-native-thumbnail-video';
import Youtube from 'react-native-youtube';
import {
  Carousel,
  ContentWrapper,
  Gap,
  LabelCategory,
  ListCardBlockChain,
  ListCardNews,
  ListCardNewsWithDesc,
  Loading,
  SearchBox,
  SelectLanguage,
  Title,
} from '../../components';
import {API_URL} from '@env';
import axios from 'axios';
import {getData, storeData} from '../../utils';

// style
import styles from './style';

const Home = () => {
  const width = Dimensions.get('window').width - 50;
  const source =
    '<a class="twitter-timeline" href="https://twitter.com/fintexnews?ref_src=twsrc%5Etfw">Tweets by fintexnews</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
  const navigation = useNavigation();

  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [selectedIndexLang, setSelectedIndexLang] = React.useState(
    new IndexPath(0),
  );
  const [news, setNews] = React.useState([]);
  const [trendNews, setTrendNews] = React.useState([]);
  const [tags, setTags] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    getData('language').then(language => {
      if (language === 'ENG') {
        setSelectedIndexLang(new IndexPath(0));
      }
      if (language === 'ID') {
        setSelectedIndexLang(new IndexPath(1));
      }
    });
  }, []);

  React.useEffect(() => {
    setLoading(true);
    getData('language').then(language => {
      axios
        .get(`${API_URL}/api/post`)
        .then(resNews => {
          axios
            .get(`${API_URL}/api/popular/post`)
            .then(resTrendNews => {
              axios
                .get(`${API_URL}/api/tag`)
                .then(resTag => {
                  // if use english language
                  if (language === 'ENG') {
                    setNews(resNews.data.data.english);
                    setTrendNews(resTrendNews.data.data.english);
                    setTags(resTag.data.data.english);
                  }
                  // if use indonesia language
                  else if (language === 'ID') {
                    setNews(resNews.data.data.indonesia);
                    setTrendNews(resTrendNews.data.data.indonesia);
                    setTags(resTag.data.data.indonesia);
                  }
                })
                .catch(e => console.log('Error tag: ', e));
            })
            .catch(e => console.log('Error trend news: ', e));
        })
        .catch(e => console.log('Error news: ', e))
        .finally(() => setLoading(false));
    });
  }, [selectedIndexLang]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setLoading(true);
    axios
      .get(`${API_URL}/api/post`)
      .then(resNews => {
        if (selectedIndexLang.row === 0) {
          setNews(resNews.data.data.english);
        } else if (selectedIndexLang.row === 1) {
          setNews(resNews.data.data.indonesia);
        }
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false), setRefreshing(false));
  }, []);

  const setLanguage = index => {
    setSelectedIndexLang(index);
    storeData('language', index.row === 0 ? 'ENG' : 'ID');
  };

  return (
    <ContentWrapper style={styles.page}>
      <View style={styles.wrapper}>
        <View style={styles.searchBox}>
          <SearchBox onPressIn={() => navigation.navigate('Search')} />
        </View>
        <SelectLanguage
          selectedIndex={selectedIndexLang}
          onSelect={setLanguage}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Carousel />
            <Gap height={20} />
            <Title text="latest videos" />
            <Thumbnail url="https://www.youtube.com/watch?v=9vm2CNHw3co" />
            <Gap height={20} />
            <Title text="trending news" />
            {news.length > 0 ? <ListCardNews data={news} /> : <Loading />}
            <Title text="latest news" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={[styles.wrapper, styles.flexWrap]}>
                {tags.map(tag => (
                  <LabelCategory
                    key={tag.tags_id}
                    text={tag.name}
                    onPress={() => alert('hii')}
                  />
                ))}
              </View>
            </ScrollView>
            {trendNews.length > 0 ? (
              <ListCardNewsWithDesc data={trendNews} />
            ) : (
              <Loading />
            )}
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
          </>
        )}
      </ScrollView>
    </ContentWrapper>
  );
};

export default Home;
