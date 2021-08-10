import {useNavigation} from '@react-navigation/native';
import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardNews, Gap} from '../../atoms';
import {API_URL} from '@env';

const ListCardNews = ({data}) => {
  const navigation = useNavigation();
  return (
    <Layout style={styles.container}>
      {data.map((news, index) => (
        <View style={styles.wrapperCard}>
          <CardNews
            key={news.posts_id}
            image={`${API_URL}/${news.picture}`}
            title={news.title}
            tags={news.tags}
            onPress={() =>
              navigation.navigate('DetailArticle', {newsId: news.posts_id})
            }
          />
        </View>
      ))}
    </Layout>
  );
};

export default ListCardNews;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  wrapperCard: {
    width: '50%',
    padding: 7,
  },
});

// const data = [
//   {
//     title: 'Mengenal Istilah Yield Farming dan Crypto Staking',
//     imgUrl: 'https://fintexnews.com/wp-content/uploads/2021/06/farming.png',
//     date: '30 JUNI 2021',
//     category: ['investment'],
//   },
//   {
//     title: 'DEX yang Lagi Naik Daun, Apa Itu Uniswap dan Pancakeswap?',
//     imgUrl: 'https://fintexnews.com/wp-content/uploads/2021/06/DEX-890x450.png',
//     date: '30 JUNI 2021',
//     category: ['binance', 'ethereum'],
//   },
//   {
//     title:
//       'Wow! Bitcoin Mulai Goyah, Dominasinya di Pasar Crypto Tergerus Ether',
//     imgUrl: 'https://fintexnews.com/wp-content/uploads/2021/07/tko-890x450.png',
//     date: '30 JUNI 2021',
//     category: ['cryptocurrency', 'ethereum'],
//   },
//   {
//     title:
//       'Keren! Teknologi Blockchain Jadi Solusi Keruwetan Rantai Distribusi Vaksin Covid-19',
//     imgUrl:
//       'https://fintexnews.com/wp-content/uploads/2021/07/vaksin-890x450.png',
//     date: '30 JUNI 2021',
//     category: ['blockchain'],
//   },
//   {
//     title: 'Kenapa Non Fungible Token atau NFT itu Dibilang Unik?',
//     imgUrl: 'https://fintexnews.com/wp-content/uploads/2021/06/NFT-890x450.png',
//     date: '30 JUNI 2021',
//     category: ['blockchain'],
//   },
// ];
