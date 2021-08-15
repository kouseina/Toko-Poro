import {Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Thumbnail} from 'react-native-thumbnail-video';

export default function ThumbnailVideo({data}) {
  return (
    <>
      {data.map((video, index) => (
        <>
          <Thumbnail url={video.link} />
          <Text style={styles.title} numberOfLines={2}>
            {video.title}
          </Text>
        </>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 16,
    marginTop: 7,
  },
});
