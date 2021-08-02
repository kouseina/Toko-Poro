import React from 'react';
import {Dimensions, ScrollView} from 'react-native';
import WebView from 'react-native-webview';
import {ContentWrapper, Gap} from '../../components';

// style
import styles from './style';

const Trends = () => {
  const width = Dimensions.get('window').width - 50;
  const source =
    '<a class="twitter-timeline" href="https://twitter.com/fintexnews?ref_src=twsrc%5Etfw">Tweets by fintexnews</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

  return (
    <ContentWrapper style={styles.page}>
      <WebView
        source={{html: source}}
        javaScriptEnabled={true}
        style={{height: 400, width: width}}
      />
    </ContentWrapper>
  );
};

export default Trends;
