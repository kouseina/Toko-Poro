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

const SearchScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [news, setNews] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [empty, setEmpty] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setLoading(true);
      getData('language').then(language => {
        axios
          .get(`${API_URL}/api/post/tag/${route.params.tagsId}`)
          .then(resNewsTags => {
            if (Object.keys(resNewsTags.data.data).length > 0) {
              if (resNewsTags.data.data) {
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
                `Tidak ada artikel dengan tag: ${route.params.tagsName}`,
              );
            }
          })
          .catch(e => console.log('Error news by tags: ', e))
          .finally(() => setLoading(false));
      });
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    console.log('call tags this screen');
  }, [route]);

  const onSubmitEditing = () => {
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
            setEmpty(`Tidak ada artikel dengan keyword: ${search}`);
          }
        });
      })
      .catch(e => console.log('Error news: ', e))
      .finally(() => setLoading(false));
  };

  console.log('news: ', news);

  return (
    <ContentWrapper>
      <Header
        autoFocus={true}
        onChangeText={value => setSearch(value)}
        onSubmitEditing={onSubmitEditing}
      />
      {!loading ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {news.length > 0 ? (
            <ListCardNewsWithDesc data={news} />
          ) : empty !== '' ? (
            <View style={{flex: 1}}>
              <Text>{empty}</Text>
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

const styles = StyleSheet.create({});
