import React from 'react';
import {View, Image} from 'react-native';
import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import {SearchBox} from '../../../components';
import Carousel from 'react-native-snap-carousel';

// style
import styles from './HeaderHome.style';
import {colors} from '../../../utils';
import {DummyBanner1, DummyBanner2} from '../../../assets';

const Index = () => {
  const [search, setSearch] = React.useState('');
  const [carousel, setCarousel] = React.useState({
    activeIndex: 0,
    carouselItems: [
      {
        title: 'Hoodie Collection',
        text: 'Latest shoe recommendations which is being hit right now',
        background: '#286BC7',
        img: DummyBanner1,
        color: colors.white,
      },
      {
        title: 'Hoodie Collection',
        text: 'Latest shoe recommendations which is being hit right now',
        background: '#ECEEF0',
        img: DummyBanner2,
        color: colors.black,
      },
    ],
  });

  const RenderIconCart = props => (
    <Icon
      {...props}
      name="shopping-cart-outline"
      style={[styles.icon, styles.btnCart]}
      fill={colors.white}
      onPress={() => alert('hiii')}
    />
  );

  const renderBanner = ({item, index}) => {
    return (
      <View style={styles.carousel(item.background)}>
        <View style={styles.carouselLeft}>
          <Text style={styles.bannerTitle(item.color)}>{item.title}</Text>
          <Text style={styles.bannerDesc(item.color)}>{item.text}</Text>
          <Button
            size="tiny"
            status="control"
            style={styles.bannerBtn}
            onPress={() => alert('hi')}>
            Get Now
          </Button>
        </View>
        <View>
          <Image style={styles.imgBanner} source={item.img} />
        </View>
      </View>
    );
  };

  return (
    <Layout style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.wrapper}>
        <SearchBox value={search} onChangeText={value => setSearch(value)} />
        <RenderIconCart />
      </View>
      <Carousel
        layout="default"
        data={carousel.carouselItems}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderBanner}
        onSnapToItem={index => setCarousel({...carousel, activeIndex: index})}
        loop={true}
        autoplay={true}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
      />
    </Layout>
  );
};

export default Index;
