import axios from 'axios';
import React from 'react';
import {Dimensions, ScrollView, RefreshControl} from 'react-native';
import {ContentWrapper, Gap, ListVideo, Loading, Title} from '../../components';
import {API_URL} from '@env';

// style
import styles from './style';
import {getData} from '../../utils';
import {LangIndo} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const VideoScreen = () => {
  const width = Dimensions.get('window').width - 50;
  const navigation = useNavigation();

  const [videos, setVideos] = React.useState([]);
  const [loading, setLoading] = React.useState([]);
  const [lang, setLang] = React.useState('ENG');
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
            setLang('ID');
          }
          // if use english language
          else {
            setVideos(resVideos.data.data.english);
            setLang('ENG');
          }
        })
        .catch(e => console.log('Error video: ', e))
        .finally(() => setLoading(false), setRefreshing(false));
    });
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getVideo();
    });

    return unsubscribe;
  }, [navigation]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getVideo();
  }, []);

  return (
    <ContentWrapper style={styles.page}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Title
          text={lang === 'ID' ? LangIndo.video.titleAllVideo : 'All video'}
        />
        {loading ? <Loading /> : <ListVideo data={videos} />}
      </ScrollView>
    </ContentWrapper>
  );
};

export default VideoScreen;
