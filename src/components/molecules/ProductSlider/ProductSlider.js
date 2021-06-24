import React from 'react';
import {View, Image} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import Carousel from 'react-native-snap-carousel';

// style
import styles from './ProductSlider.style';
import {colors} from '../../../utils';

const Index = ({title, items}) => {
  const [carousel, setCarousel] = React.useState({
    activeIndex: 0,
    carouselItems: items,
  });

  const renderProductCatalog = ({item, index}) => {
    console.log('image: ', item.galleries[0].photo);
    return (
      <View style={styles.carousel}>
        <Image
          style={styles.img}
          source={{uri: `${item.galleries[0].photo}`}}
        />
        <View style={styles.productText}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>Rp. {item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <Layout style={styles.container}>
      <View style={styles.wrapperLabel}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <Carousel
        layout="default"
        data={carousel.carouselItems}
        sliderWidth={350}
        itemWidth={138}
        renderItem={renderProductCatalog}
        onSnapToItem={index => setCarousel({...carousel, activeIndex: index})}
        activeSlideOffset={50}
      />
    </Layout>
  );
};

export default Index;
