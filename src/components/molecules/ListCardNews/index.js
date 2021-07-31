import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardNews, Gap} from '../../atoms';

const ListCardNews = () => {
  return (
    <Layout style={styles.container}>
      {data.map((news, index) => (
        <>
          <CardNews
            key={index}
            image={news.imgUrl}
            title={news.title}
            onPress={() => alert('news: ', index)}
          />
          <Gap height={30} />
        </>
      ))}
    </Layout>
  );
};

export default ListCardNews;

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
  },
  {
    title: 'DEX yang Lagi Naik Daun, Apa Itu Uniswap dan Pancakeswap?',
    imgUrl: 'https://fintexnews.com/wp-content/uploads/2021/06/DEX-890x450.png',
    date: '30 JUNI 2021',
  },
  {
    title:
      'Wow! Bitcoin Mulai Goyah, Dominasinya di Pasar Crypto Tergerus Ether',
    imgUrl: 'https://fintexnews.com/wp-content/uploads/2021/07/tko-890x450.png',
    date: '30 JUNI 2021',
  },
  {
    title:
      'Keren! Teknologi Blockchain Jadi Solusi Keruwetan Rantai Distribusi Vaksin Covid-19',
    imgUrl:
      'https://fintexnews.com/wp-content/uploads/2021/07/vaksin-890x450.png',
    date: '30 JUNI 2021',
  },
  {
    title: 'Kenapa Non Fungible Token atau NFT itu Dibilang Unik?',
    imgUrl: 'https://fintexnews.com/wp-content/uploads/2021/06/NFT-890x450.png',
    date: '30 JUNI 2021',
  },
];
