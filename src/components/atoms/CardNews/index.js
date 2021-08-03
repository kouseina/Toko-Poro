import React from 'react';
import {Card, Layout, Text} from '@ui-kitten/components';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import LabelCategory from '../LabelCategory';
import Gap from '../Gap';

const CardNews = ({image, title, onPress, desc, category, key}) => {
  return (
    <Layout style={styles.container} key={key}>
      <Card style={styles.card}>
        <TouchableOpacity onPress={onPress}>
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
          <Text style={styles.title} numberOfLines={3}>
            {title}
          </Text>
          {desc && (
            <>
              <Gap height={2} />
              <Text style={styles.desc} category="c1" numberOfLines={4}>
                {desc}
              </Text>
            </>
          )}
        </TouchableOpacity>
      </Card>
    </Layout>
  );
};

export default CardNews;

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 150,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    marginTop: 7,
  },
  card: {
    padding: 7,
    borderRadius: 10,
    paddingBottom: 20,
  },
  wrapperCategory: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
