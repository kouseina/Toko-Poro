import {useNavigation} from '@react-navigation/native';
import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardBlockChain, Gap} from '../../atoms';

const ListCardBlockChain = () => {
  const navigation = useNavigation();
  return (
    <Layout style={styles.container}>
      {data.map((news, index) => (
        <>
          <CardBlockChain
            key={index}
            image={news.imgUrl}
            title={news.title}
            onPress={() => navigation.navigate('DetailArticle')}
            category={news.category}
          />
          <Gap height={30} />
        </>
      ))}
    </Layout>
  );
};

export default ListCardBlockChain;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

const data = [
  {
    title: 'Mengenal Istilah Yield Farming dan Crypto Staking',
    imgUrl: 'https://fintexnews.com/wp-content/uploads/2021/06/farming.png',
    date: '30 JUNI 2021',
    category: ['CRYPTOCURRENCY', 'ethereum'],
  },
  {
    title: 'DEX yang Lagi Naik Daun, Apa Itu Uniswap dan Pancakeswap?',
    imgUrl: 'https://fintexnews.com/wp-content/uploads/2021/06/DEX-890x450.png',
    date: '30 JUNI 2021',
    category: ['market', 'investment'],
  },
  {
    title:
      'Wow! Bitcoin Mulai Goyah, Dominasinya di Pasar Crypto Tergerus Ether',
    imgUrl: 'https://fintexnews.com/wp-content/uploads/2021/07/tko-890x450.png',
    date: '30 JUNI 2021',
    category: ['bitcoin', 'success story'],
  },
];
