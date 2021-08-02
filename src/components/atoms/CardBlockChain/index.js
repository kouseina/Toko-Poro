import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import LabelCategory from '../LabelCategory';

const CardBlockChain = ({onPress, title, category, image}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Layout style={styles.container}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <View style={styles.wrapperTitle}>
          {category.length > 0 && (
            <View style={styles.wrapperCategory}>
              {category.map((cat, index) => (
                <LabelCategory key={index} text={cat} />
              ))}
            </View>
          )}
          <Text style={styles.title} category="h6" numberOfLines={2}>
            {title}
          </Text>
        </View>
      </Layout>
    </TouchableOpacity>
  );
};

export default CardBlockChain;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    height: 90,
    width: 90,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontWeight: '700',
  },
  wrapperTitle: {
    padding: 5,
    paddingLeft: 10,
    flex: 1,
  },
  wrapperCategory: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
