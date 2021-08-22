import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import {CardNews, Gap} from '../../atoms';
import {API_URL} from '@env';
import {useNavigation} from '@react-navigation/native';

const width = (Dimensions.get('window').width * 70) / 100;

const ListCardNewsWithDesc = ({data}) => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {data.map((news, index) => (
        <View style={styles.card}>
          <CardNews
            key={news.posts_id}
            image={`${API_URL}/${news.picture}`}
            title={news.title}
            desc={news.content}
            tags={news.category}
            onPress={() => {
              navigation.navigate('DetailArticle', {newsId: news.posts_id});
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default ListCardNewsWithDesc;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  card: {
    width: width,
    marginRight: 15,
  },
});
