import {Icon, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import Gap from '../Gap';

export const SLIDER_WIDTH = Dimensions.get('window').width - 50;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

const CarouselCardPrimary = ({item, index, onPress}) => {
  return (
    <Layout style={styles.container} key={index}>
      <ImageBackground
        source={{uri: item.imgUrl}}
        resizeMode="cover"
        style={styles.image}>
        <Layout style={styles.innerContainer}>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.wrapper}>
              <Text style={styles.subHeader}>- BY FINTEX</Text>
              <Gap width={20} />
              <View style={styles.wrapper}>
                <Icon name="calendar" style={styles.icon} fill="white" />
                <Gap width={5} />
                <Text style={styles.subHeader}>{item.date}</Text>
              </View>
            </View>
            <Text style={styles.header} numberOfLines={2}>
              {item.title}
            </Text>
          </TouchableOpacity>
        </Layout>
      </ImageBackground>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    height: 250,
  },
  image: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.60)',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  header: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subHeader: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    width: 18,
    height: 18,
  },
  wrapper: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
});

export default CarouselCardPrimary;
