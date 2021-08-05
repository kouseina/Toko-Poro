import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CardNews, Gap} from '../../atoms';

const ListCardNewsWithDesc = () => {
  return (
    <Layout style={styles.container}>
      {data.map((news, index) => (
        <>
          <CardNews
            key={index}
            image={news.imgUrl}
            title={news.title}
            desc={news.desc}
            category={news.category}
            onPress={() => alert('news: ', index)}
          />
          <Gap height={15} />
        </>
      ))}
    </Layout>
  );
};

export default ListCardNewsWithDesc;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

const data = [
  {
    title: 'Mengenal Istilah Yield Farming dan Crypto Staking',
    imgUrl: 'https://fintexnews.com/wp-content/uploads/2021/06/farming.png',
    date: '30 JUNI 2021',
    category: ['investment'],
    desc: `Fintexnews.com – Banyak anak muda Indonesia kini yang investasi Bitcoin. Sejak 2019 lalu, aset crypto terus tumbuh di Indonesia dan menyihir banyak orang, terutama kawula muda. Jika dulu hanya menarik minat para geeks dan ahli teknologi, sekarang Bitcoin sudah dimiliki hampir semua kalangan. Mulai dari pengusaha hingga kumpulan selebritis atau pesohor. Ada banyak selebritis dunia yang memilih instrumen investasi ini. Bahkan artis lokal Indonesia pun banyak. Siapa saja mereka? Berikut ini nama-nama artis lokal yang memilih investasi aset digital ini dikutip dari berbagai sumber: 1. Chef Arnold Pecinta kuliner Indonesia pasti kenal dengan Arnold Purnomo. Juri ajang pencari bakat memasak MasterChef Indonesia itu diam-diam ternyata seorang penggemar cryptocurrency. Namun pria kelahiran Surabaya itu bisa dibilang pemain baru di duni crypto ini. Arnold, yang memiliki sapaan gaul Chef Arnold itu mengaku pertama kali memulai investasinya di aset crypto pada Juli 2020. Hal ini disampaikannya dalam sebuah acara webinar yang diselenggarakan Zipmex, sebuah exchange mata uang digital teregulasi yang menawarkan perdagangan cepat aset crypto pada April 2021 lalu. Arnold bercerita sebelum memutuskan berinvestasi di crypto. Ia mengaku mencari tahu lebih dulu mengenai aset kripto sejak 2017, ketika aset kripto bullish sentuh rekor tertinggi. Namun, saat itu ia tidak langsung merealisasikan keinginannya untuk membeli aset kripto.`,
  },
  {
    title: 'DEX yang Lagi Naik Daun, Apa Itu Uniswap dan Pancakeswap?',
    imgUrl: 'https://fintexnews.com/wp-content/uploads/2021/06/DEX-890x450.png',
    date: '30 JUNI 2021',
    category: ['binance', 'ethereum'],
    desc: `Fintexnews.com – Banyak anak muda Indonesia kini yang investasi Bitcoin. Sejak 2019 lalu, aset crypto terus tumbuh di Indonesia dan menyihir banyak orang, terutama kawula muda. Jika dulu hanya menarik minat para geeks dan ahli teknologi, sekarang Bitcoin sudah dimiliki hampir semua kalangan. Mulai dari pengusaha hingga kumpulan selebritis atau pesohor. Ada banyak selebritis dunia yang memilih instrumen investasi ini. Bahkan artis lokal Indonesia pun banyak. Siapa saja mereka? Berikut ini nama-nama artis lokal yang memilih investasi aset digital ini dikutip dari berbagai sumber: 1. Chef Arnold Pecinta kuliner Indonesia pasti kenal dengan Arnold Purnomo. Juri ajang pencari bakat memasak MasterChef Indonesia itu diam-diam ternyata seorang penggemar cryptocurrency. Namun pria kelahiran Surabaya itu bisa dibilang pemain baru di duni crypto ini. Arnold, yang memiliki sapaan gaul Chef Arnold itu mengaku pertama kali memulai investasinya di aset crypto pada Juli 2020. Hal ini disampaikannya dalam sebuah acara webinar yang diselenggarakan Zipmex, sebuah exchange mata uang digital teregulasi yang menawarkan perdagangan cepat aset crypto pada April 2021 lalu. Arnold bercerita sebelum memutuskan berinvestasi di crypto. Ia mengaku mencari tahu lebih dulu mengenai aset kripto sejak 2017, ketika aset kripto bullish sentuh rekor tertinggi. Namun, saat itu ia tidak langsung merealisasikan keinginannya untuk membeli aset kripto.`,
  },
  {
    title:
      'Wow! Bitcoin Mulai Goyah, Dominasinya di Pasar Crypto Tergerus Ether',
    imgUrl: 'https://fintexnews.com/wp-content/uploads/2021/07/tko-890x450.png',
    date: '30 JUNI 2021',
    category: ['cryptocurrency', 'ethereum'],
    desc: `Fintexnews.com – Banyak anak muda Indonesia kini yang investasi Bitcoin. Sejak 2019 lalu, aset crypto terus tumbuh di Indonesia dan menyihir banyak orang, terutama kawula muda. Jika dulu hanya menarik minat para geeks dan ahli teknologi, sekarang Bitcoin sudah dimiliki hampir semua kalangan. Mulai dari pengusaha hingga kumpulan selebritis atau pesohor. Ada banyak selebritis dunia yang memilih instrumen investasi ini. Bahkan artis lokal Indonesia pun banyak. Siapa saja mereka? Berikut ini nama-nama artis lokal yang memilih investasi aset digital ini dikutip dari berbagai sumber: 1. Chef Arnold Pecinta kuliner Indonesia pasti kenal dengan Arnold Purnomo. Juri ajang pencari bakat memasak MasterChef Indonesia itu diam-diam ternyata seorang penggemar cryptocurrency. Namun pria kelahiran Surabaya itu bisa dibilang pemain baru di duni crypto ini. Arnold, yang memiliki sapaan gaul Chef Arnold itu mengaku pertama kali memulai investasinya di aset crypto pada Juli 2020. Hal ini disampaikannya dalam sebuah acara webinar yang diselenggarakan Zipmex, sebuah exchange mata uang digital teregulasi yang menawarkan perdagangan cepat aset crypto pada April 2021 lalu. Arnold bercerita sebelum memutuskan berinvestasi di crypto. Ia mengaku mencari tahu lebih dulu mengenai aset kripto sejak 2017, ketika aset kripto bullish sentuh rekor tertinggi. Namun, saat itu ia tidak langsung merealisasikan keinginannya untuk membeli aset kripto.`,
  },
  {
    title:
      'Keren! Teknologi Blockchain Jadi Solusi Keruwetan Rantai Distribusi Vaksin Covid-19',
    imgUrl:
      'https://fintexnews.com/wp-content/uploads/2021/07/vaksin-890x450.png',
    date: '30 JUNI 2021',
    category: ['blockchain'],
    desc: `Fintexnews.com – Banyak anak muda Indonesia kini yang investasi Bitcoin. Sejak 2019 lalu, aset crypto terus tumbuh di Indonesia dan menyihir banyak orang, terutama kawula muda. Jika dulu hanya menarik minat para geeks dan ahli teknologi, sekarang Bitcoin sudah dimiliki hampir semua kalangan. Mulai dari pengusaha hingga kumpulan selebritis atau pesohor. Ada banyak selebritis dunia yang memilih instrumen investasi ini. Bahkan artis lokal Indonesia pun banyak. Siapa saja mereka? Berikut ini nama-nama artis lokal yang memilih investasi aset digital ini dikutip dari berbagai sumber: 1. Chef Arnold Pecinta kuliner Indonesia pasti kenal dengan Arnold Purnomo. Juri ajang pencari bakat memasak MasterChef Indonesia itu diam-diam ternyata seorang penggemar cryptocurrency. Namun pria kelahiran Surabaya itu bisa dibilang pemain baru di duni crypto ini. Arnold, yang memiliki sapaan gaul Chef Arnold itu mengaku pertama kali memulai investasinya di aset crypto pada Juli 2020. Hal ini disampaikannya dalam sebuah acara webinar yang diselenggarakan Zipmex, sebuah exchange mata uang digital teregulasi yang menawarkan perdagangan cepat aset crypto pada April 2021 lalu. Arnold bercerita sebelum memutuskan berinvestasi di crypto. Ia mengaku mencari tahu lebih dulu mengenai aset kripto sejak 2017, ketika aset kripto bullish sentuh rekor tertinggi. Namun, saat itu ia tidak langsung merealisasikan keinginannya untuk membeli aset kripto.`,
  },
  {
    title: 'Kenapa Non Fungible Token atau NFT itu Dibilang Unik?',
    imgUrl: 'https://fintexnews.com/wp-content/uploads/2021/06/NFT-890x450.png',
    date: '30 JUNI 2021',
    category: ['blockchain'],
    desc: `Fintexnews.com – Banyak anak muda Indonesia kini yang investasi Bitcoin. Sejak 2019 lalu, aset crypto terus tumbuh di Indonesia dan menyihir banyak orang, terutama kawula muda. Jika dulu hanya menarik minat para geeks dan ahli teknologi, sekarang Bitcoin sudah dimiliki hampir semua kalangan. Mulai dari pengusaha hingga kumpulan selebritis atau pesohor. Ada banyak selebritis dunia yang memilih instrumen investasi ini. Bahkan artis lokal Indonesia pun banyak. Siapa saja mereka? Berikut ini nama-nama artis lokal yang memilih investasi aset digital ini dikutip dari berbagai sumber: 1. Chef Arnold Pecinta kuliner Indonesia pasti kenal dengan Arnold Purnomo. Juri ajang pencari bakat memasak MasterChef Indonesia itu diam-diam ternyata seorang penggemar cryptocurrency. Namun pria kelahiran Surabaya itu bisa dibilang pemain baru di duni crypto ini. Arnold, yang memiliki sapaan gaul Chef Arnold itu mengaku pertama kali memulai investasinya di aset crypto pada Juli 2020. Hal ini disampaikannya dalam sebuah acara webinar yang diselenggarakan Zipmex, sebuah exchange mata uang digital teregulasi yang menawarkan perdagangan cepat aset crypto pada April 2021 lalu. Arnold bercerita sebelum memutuskan berinvestasi di crypto. Ia mengaku mencari tahu lebih dulu mengenai aset kripto sejak 2017, ketika aset kripto bullish sentuh rekor tertinggi. Namun, saat itu ia tidak langsung merealisasikan keinginannya untuk membeli aset kripto.`,
  },
];
