import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

const CardNews = ({image, title, onPress}) => {
  return (
    <Layout style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <Text style={styles.title} numberOfLines={3}>
          {title}
        </Text>
      </TouchableOpacity>
    </Layout>
  );
};

export default CardNews;

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 200,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    marginTop: 10,
    lineHeight: 28,
  },
});
