import {useNavigation} from '@react-navigation/native';
import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Thumbnail} from 'react-native-thumbnail-video';

const ListVideo = ({data}) => {
  const navigation = useNavigation();
  const width = Dimensions.get('window').width - 50;
  return (
    <Layout style={styles.container}>
      {data.map((video, index) => (
        <>
          <View style={styles.wrapperCard}>
            <Thumbnail url={video.link} imageWidth={(width * 50) / 100 - 10} />
            <Text style={styles.title} numberOfLines={2}>
              {video.title}
            </Text>
          </View>
        </>
      ))}
    </Layout>
  );
};

export default ListVideo;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  wrapperCard: {
    width: '50%',
  },
  title: {
    fontWeight: '700',

    marginTop: 10,
  },
});
