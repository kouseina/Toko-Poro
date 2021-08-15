import axios from 'axios';
import React from 'react';
import {Dimensions, ScrollView, RefreshControl} from 'react-native';
import {ContentWrapper, Gap, ListVideo, Loading, Title} from '../../components';
import {API_URL} from '@env';

// style
import styles from './style';
import {getData} from '../../utils';

const Video = () => {
  const width = Dimensions.get('window').width - 50;
  const [videos, setVideos] = React.useState([]);
  const [loading, setLoading] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const getVideo = () => {
    setLoading(true);
    getData('language').then(language => {
      axios
        .get(`${API_URL}/api/video`)
        .then(resVideos => {
          // if use indonesia language
          if (language === 'ID') {
            setVideos(resVideos.data.data.indonesia);
          }
          // if use english language
          else {
            setVideos(resVideos.data.data.english);
          }
        })
        .catch(e => console.log('Error video: ', e))
        .finally(() => setLoading(false));
    });
  };

  React.useEffect(() => {
    getVideo();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(loading);
    getAllApi();
  }, []);

  return (
    <ContentWrapper style={styles.page}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Title text="All video" />
        {loading ? <Loading /> : <ListVideo data={videos} />}
      </ScrollView>
    </ContentWrapper>
  );
};

export default Video;
