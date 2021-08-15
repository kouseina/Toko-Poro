import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomCarousel from 'react-native-snap-carousel';
import {CarouselCardPrimary} from '../../atoms';
import {ITEM_WIDTH, SLIDER_WIDTH} from '../../atoms/CarouselCardPrimary';

const Carousel = ({data}) => {
  const isCarousel = React.useRef(null);

  const [index, setIndex] = React.useState(0);
  const navigation = useNavigation();

  return (
    <CustomCarousel
      layout="default"
      ref={isCarousel}
      data={data}
      renderItem={CarouselCardPrimary.bind(navigation)}
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
