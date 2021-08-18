import {useNavigation, useRoute} from '@react-navigation/native';
import {Text} from '@ui-kitten/components';
import axios from 'axios';
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  ContentWrapper,
  Header,
  ListCardNewsWithDesc,
  Loading,
} from '../../components';
import {API_URL} from '@env';
import {getData, storeData} from '../../utils';

import styles from './style';
import {LangIndo} from '../../assets';

const SearchScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [news, setNews] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [empty, setEmpty] = React.useState('');
  const [tagName, setTagName] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [lang, setLang] = React.useState('ENG');

  const getNewsByTag = () => {
    if (route.params !== undefined && route.params !== undefined) {
      getData('language').then(language => {
        setLoading(true);
        axios
          .get(`${API_URL}/api/post/tag/${route.params.tagsId}`)
          .then(resNewsTags => {
            if (Object.keys(resNewsTags.data.data).length > 0) {
              if (resNewsTags.data.data) {
                setTagName(route.params.tagsName);
                // if use english language
                if (language === 'ENG') {
                  setNews(resNewsTags.data.data.english);
                }
                // if use indonesia language
                else if (language === 'ID') {
                  setNews(resNewsTags.data.data.indonesia);
                }
              }
            } else {
              console.log('clear');
              setNews([]);
              setEmpty(
                language === 'ID'
                  ? `${LangIndo.search.tagEmpty} ${route.params.tagsName}`
                  : `No articles tagged: ${route.params.tagsName}`,
              );
            }
          })
          .catch(e => console.log('Error news by tags: ', e))
          .finally(() => setLoading(false));
      });
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData('language').then(language => {
        if (language === 'ID') {
          setLang('ID');
        } else {
          setLang('ENG');
        }
      });
      getNewsByTag();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    getNewsByTag();
  }, [route]);

  const onSubmitEditing = () => {
    setTagName('');
    setEmpty('');
    setLoading(true);
    axios
      .get(`${API_URL}/api/post?search=${search}`)
      .then(resNews => {
        getData('language').then(language => {
          if (Object.keys(resNews.data.data).length > 0) {
            console.log('gkjadi');
            // if use english language
            if (language === 'ENG') {
              setNews(resNews.data.data.english);
            }
            // if use indonesia language
            else if (language === 'ID') {
              setNews(resNews.data.data.indonesia);
            }
          } else {
            console.log('clear');
            setNews([]);
            setEmpty(
              language === 'ID'
                ? `${LangIndo.search.searchEmpty} ${search}`
                : `There are no articles with the keyword: ${search}`,
            );
          }
        });
      })
      .catch(e => console.log('Error news: ', e))
      .finally(() => setLoading(false));
  };

  return (
    <ContentWrapper>
      <Header
        autoFocus={route.params ? false : true}
        onChangeText={value => setSearch(value)}
        onSubmitEditing={onSubmitEditing}
        placeholder={lang === 'ID' ? LangIndo.search.search : 'Find article...'}
      />
      {!loading ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {tagName.length > 0 && <Text style={styles.tag}>Tag: {tagName}</Text>}
          {news.length > 0 ? (
            <ListCardNewsWithDesc data={news} />
          ) : empty !== '' ? (
            <View style={{flex: 1}}>
              <Text style={styles.tag}>{empty}</Text>
            </View>
          ) : (
            <></>
          )}
        </ScrollView>
      ) : (
        <Loading />
      )}
    </ContentWrapper>
  );
};

export default SearchScreen;
