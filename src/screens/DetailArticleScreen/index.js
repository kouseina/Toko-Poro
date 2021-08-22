import {useNavigation, useRoute} from '@react-navigation/native';
import {Icon, Text, useTheme} from '@ui-kitten/components';
import axios from 'axios';
import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  RefreshControl,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {
  ContentWrapper,
  Gap,
  Header,
  HorizontalCardNewsWithDesc,
  LabelCategory,
  Loading,
  Title,
} from '../../components';
import {colors, getData} from '../../utils';
import {API_URL} from '@env';
import Share from 'react-native-share';

import styles from './style';
import {LangIndo} from '../../assets';

const DetailArticleScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();

  const paragraph =
    '<p>Fintexnews.com –&nbsp;Banyak anak muda Indonesia kini yang investasi Bitcoin. Sejak 2019 lalu, aset crypto terus tumbuh di Indonesia dan menyihir banyak orang, terutama kawula muda.<br style=""><br style="">Jika dulu hanya menarik minat para geeks dan ahli teknologi, sekarang Bitcoin sudah dimiliki hampir semua kalangan. Mulai dari pengusaha hingga kumpulan selebritis atau pesohor.<br style=""><br style="">Ada banyak selebritis dunia yang memilih instrumen investasi ini. Bahkan artis lokal Indonesia pun banyak. Siapa saja mereka? Berikut ini nama-nama artis lokal yang memilih investasi aset digital ini dikutip dari berbagai sumber:<br style=""><br style="">1. Chef Arnold<br style=""><br style="">Pecinta kuliner Indonesia pasti kenal dengan Arnold Purnomo. Juri ajang pencari bakat memasak MasterChef Indonesia itu diam-diam ternyata seorang penggemar cryptocurrency.<br style=""><br style="">Namun pria kelahiran Surabaya itu bisa dibilang pemain baru di duni crypto ini. Arnold, yang memiliki sapaan gaul Chef Arnold itu mengaku pertama kali memulai investasinya di aset crypto pada Juli 2020.<br style=""><br style="">Hal ini disampaikannya dalam sebuah acara webinar yang diselenggarakan Zipmex, sebuah exchange mata uang digital teregulasi yang menawarkan perdagangan cepat aset crypto pada April 2021 lalu.<br style=""><br style="">Arnold bercerita sebelum memutuskan berinvestasi di crypto. Ia mengaku mencari tahu lebih dulu mengenai aset kripto sejak 2017, ketika aset kripto bullish sentuh rekor tertinggi. Namun, saat itu ia tidak langsung merealisasikan keinginannya untuk membeli aset kripto.<br style=""><br style="">“Dari 2017 tidak belajar banyak tetapi saya sudah siap untuk investasi, tetapi kemudian bubble harga aset kripto pecah jadinya saya tidak jadi siap untuk masuk ke investasi aset kripto,” kata Arnold.<br style=""><br style="">2. Luna Maya<br style=""><br style="">Pemain film dan sinetron yang kini juga merambah jadi presenter ini ternyata tidak hanya terkenal karena kecantikannya. Tidak hanya gemar berbisnis mulai dari kuliner hingga properti, mantan kekasih Ariel Noah ini juga suka berinvestasi. Beberapa waktu yang lalu foto Luna Maya saat melakukan verifikasi akun Bitcoin.co.id (nama Indodax sebelumnya) tersebar di dunia maya dan membuktikan bahwa dirinya adalah salah satu Bitcoiners Indonesia.<br style=""><br style="">3. Ryan Delon<br style=""><br style="">Aktor yang terkenal karena sering membintangi FTV ini juga beberapa waktu yang lalu membagikan foto verifikasinya di Bitcoin.co.id. Bitcoin ternyata sudah terbukti tidak hanya menggoda para pebisnis tapi juga selebritas Indonesia.<br style=""><br style="">4. Irfan Hakim<br style=""><br style="">Memulai karirnya sebagai aktor, pria yang kini lebih dikenal sebagai presenter acara musik ini juga ternyata memiliki akun di Indodax. Beberapa waktu yang lalu beredar foto Irfan yang melakukan verifikasi pembelian Bitcoin.<br style=""><br style="">5. Ivan Gunawan<br style=""><br style="">Artis dengan segudang talenta ini juga ternyata menyimpan ketertarikan pada kripto aset. Selain jago melawak dan mendesain baju, pria yang pernah berpacaran dengan penyanyi Rossa ini konon juga punya akun di Indodax.<br style=""><br style="">6. Syahnaz Sadiqa<br style=""><br style="">Adik kandung presenter kondang Raffi Ahmad ini juga diketahui memiliki ketertarikan kepada Bitcoin. Syahnaz yang kini sudah menikah juga tidak hanya aktif di dunia hiburan tapi juga aktif trading di Indodax.<br></p>';

  const width = Dimensions.get('window').width - 50;
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [news, setNews] = React.useState({});
  const [newsLike, setNewsLike] = React.useState([]);
  const [newsTags, setNewsTags] = React.useState([]);
  const [lang, setLang] = React.useState('ENG');

  const getNews = () => {
    setLoading(true);
    getData('language').then(language => {
      axios
        .get(`${API_URL}/api/post/${route.params.newsId}`)
        .then(resNews => {
          // if use indonesia language
          if (language === 'ID') {
            setNews(resNews.data.data.indonesia);
            setNewsTags(resNews.data.data.indonesia.category);
            setLang('ID');
          }
          // if use english language
          else {
            setNews(resNews.data.data.english);
            setNewsTags(resNews.data.data.english.category);
            setLang('ENG');
          }
        })
        .catch(e => console.log('Error resNews: ', e));
    });
  };

  const getNewsLike = () => {
    if (newsTags.length > 0) {
      getData('language').then(language => {
        axios
          .get(`${API_URL}/api/post/category/${newsTags[0].category_id}`)
          .then(resNewsLike => {
            // if use indonesia language
            if (language === 'ID') {
              setNewsLike(resNewsLike.data.data.indonesia);
            }
            // if use english language
            else {
              setNewsLike(resNewsLike.data.data.english);
            }
          })
          .catch(e => console.log('Error resNewsLike: ', e))
          .finally(() => setLoading(false));
      });
    }
  };

  const filteringNewsLike = () => {
    if (newsLike.length > 0) {
      const filteredNewsLike = newsLike.filter(childNewsLike => {
        return childNewsLike.posts_id !== news.posts_id;
      });

      if (newsLike.length !== filteredNewsLike.length) {
        setNewsLike(filteredNewsLike);
        // console.log('not clear news: ', newsLike);
        // console.log('not clear filtered news: ', filteredNewsLike);
      } else {
        console.log('clear');
      }
    }
  };

  React.useEffect(() => {
    getNews();
  }, [route]);

  React.useEffect(() => {
    getNewsLike();
  }, [newsTags]);

  React.useEffect(() => {
    filteringNewsLike();
  }, [newsLike]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(loading);
    getNews();
    getNewsLike();
    filteringNewsLike();
    setRefreshing(false);
  }, []);

  const d = new Date(news.date);

  return (
    <ContentWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading ? (
          <Loading />
        ) : (
          <>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.header}>
              <Icon
                name="arrow-back-outline"
                fill={colors.primary}
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>
            <Text style={styles.title} category="h6">
              {news.title}
            </Text>
            <Gap height={20} />
            <View style={[styles.wrapper, styles.wrapperSpaceBetween]}>
              <View style={styles.wrapper}>
                <Text category="p2">
                  {`${d.getDate()} ${
                    monthNames[d.getMonth()]
                  }, ${d.getFullYear()}`}{' '}
                  by
                </Text>
                <Gap width={5} />
                <Text category="p2" style={[{fontWeight: '700'}]}>
                  Fintex
                </Text>
              </View>
              <View style={styles.wrapper}>
                <TouchableOpacity>
                  <Icon
                    style={styles.iconSocial}
                    name="twitter"
                    fill={theme['color-basic-900']}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    style={styles.iconSocial}
                    name="facebook"
                    fill={theme['color-basic-900']}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Gap height={25} />
            <View style={[styles.wrapper, styles.flexWrap]}>
              {newsTags.length > 0 &&
                newsTags.map((tag, index) => (
                  <LabelCategory
                    text={tag.name}
                    key={tag.category_id}
                    onPress={() =>
                      navigation.navigate('Search', {
                        tagsId: tag.category_id,
                        tagsName: tag.name,
                        autoFocus: false,
                      })
                    }
                  />
                ))}
            </View>
            <Gap height={8} />
            <Image
              source={{
                uri: `${API_URL}/${news.picture}`,
              }}
              style={styles.image}
            />
            <Gap height={10} />
            <View style={[styles.wrapper]}>
              <Icon
                name="eye-outline"
                fill={theme['color-basic-600']}
                style={styles.icon}
              />
              <Gap width={5} />
              <Text category="p2">{news.views}</Text>
            </View>
            <RenderHTML source={{html: news.content}} contentWidth={width} />

            <Title
              text={
                lang === 'ID'
                  ? LangIndo.detailNews.titleYouMayAlsoLike
                  : 'You May Also Like'
              }
            />
            {newsLike.length > 0 && (
              <HorizontalCardNewsWithDesc data={newsLike} />
            )}
          </>
        )}
      </ScrollView>
    </ContentWrapper>
  );
};

export default DetailArticleScreen;
