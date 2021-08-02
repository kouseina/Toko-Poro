import React from 'react';
import {Card, Layout, Text} from '@ui-kitten/components';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import LabelCategory from '../LabelCategory';

const CardNews = ({image, title, onPress, desc, category}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Layout style={styles.container}>
        <View style={styles.wrapperImage}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
          {category && (
            <View style={styles.wrapperCategory}>
              {category.map((cat, index) => (
                <LabelCategory text={cat} key={index} />
              ))}
            </View>
          )}
        </View>
        <Card style={styles.card}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.title} numberOfLines={3}>
              {title}
            </Text>
            {desc && (
              <Text style={styles.desc} category="p1" numberOfLines={4}>
                {desc}
              </Text>
            )}
          </TouchableOpacity>
        </Card>
      </Layout>
    </TouchableOpacity>
  );
};

export default CardNews;

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 5,
  },
  card: {
    padding: 10,
    paddingBottom: 15,
  },
  wrapperCategory: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
