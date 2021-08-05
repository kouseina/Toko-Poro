import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomCarousel from 'react-native-snap-carousel';
import {CarouselCardPrimary} from '../../atoms';
import {ITEM_WIDTH, SLIDER_WIDTH} from '../../atoms/CarouselCardPrimary';

const Carousel = () => {
  const isCarousel = React.useRef(null);

  const [index, setIndex] = React.useState(0);

  return (
    <CustomCarousel
      layout="default"
      ref={isCarousel}
      data={data}
      renderItem={CarouselCardPrimary}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={ITEM_WIDTH}
      useScrollView={true}
      enableMomentum={true}
      loop={true}
      enableSnap={true}
      autoplay={true}
      lockScrollWhileSnapping={true}
    />
  );
};

export default Carousel;

const styles = StyleSheet.create({});

const data = [
  {
    title: 'JAS, Telkomnya Thailand Mulai Masuk ke Bisnis Penambangan Bitcoin',
    imgUrl: 'https://fintexnews.com/wp-content/uploads/2021/07/JAS-890x450.png',
    date: '30 JUNI 2021',
    category: ['binance', 'ethereum'],
  },
  {
    title: 'Kenapa Non Fungible Token atau NFT itu Dibilang Unik?',
    imgUrl: 'https://fintexnews.com/wp-content/uploads/2021/06/NFT-890x450.png',
    date: '16 JUNI 2021',
    category: ['cryptocurrency', 'ethereum'],
  },
  {
    title: 'Biar Aman! Kamu Harus Tahu Wallet Crypto Terbaik Saat Ini',
    imgUrl:
      'https://fintexnews.com/wp-content/uploads/2021/06/cypto_wallet-890x450.png',
    date: '14 JUNI 2021',
    category: ['blockchain'],
  },
];
