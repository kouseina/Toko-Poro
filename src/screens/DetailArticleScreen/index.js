import {useNavigation} from '@react-navigation/native';
import {Icon, Spinner, Text, useTheme} from '@ui-kitten/components';
import axios from 'axios';
import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {ContentWrapper, Gap, Header, LabelCategory} from '../../components';
import {colors} from '../../utils';
import {API_URL} from '@env';

import styles from './style';

const DetailArticleScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const paragraph =
    '<p>Fintexnews.com –&nbsp;Banyak anak muda Indonesia kini yang investasi Bitcoin. Sejak 2019 lalu, aset crypto terus tumbuh di Indonesia dan menyihir banyak orang, terutama kawula muda.<br style=""><br style="">Jika dulu hanya menarik minat para geeks dan ahli teknologi, sekarang Bitcoin sudah dimiliki hampir semua kalangan. Mulai dari pengusaha hingga kumpulan selebritis atau pesohor.<br style=""><br style="">Ada banyak selebritis dunia yang memilih instrumen investasi ini. Bahkan artis lokal Indonesia pun banyak. Siapa saja mereka? Berikut ini nama-nama artis lokal yang memilih investasi aset digital ini dikutip dari berbagai sumber:<br style=""><br style="">1. Chef Arnold<br style=""><br style="">Pecinta kuliner Indonesia pasti kenal dengan Arnold Purnomo. Juri ajang pencari bakat memasak MasterChef Indonesia itu diam-diam ternyata seorang penggemar cryptocurrency.<br style=""><br style="">Namun pria kelahiran Surabaya itu bisa dibilang pemain baru di duni crypto ini. Arnold, yang memiliki sapaan gaul Chef Arnold itu mengaku pertama kali memulai investasinya di aset crypto pada Juli 2020.<br style=""><br style="">Hal ini disampaikannya dalam sebuah acara webinar yang diselenggarakan Zipmex, sebuah exchange mata uang digital teregulasi yang menawarkan perdagangan cepat aset crypto pada April 2021 lalu.<br style=""><br style="">Arnold bercerita sebelum memutuskan berinvestasi di crypto. Ia mengaku mencari tahu lebih dulu mengenai aset kripto sejak 2017, ketika aset kripto bullish sentuh rekor tertinggi. Namun, saat itu ia tidak langsung merealisasikan keinginannya untuk membeli aset kripto.<br style=""><br style="">“Dari 2017 tidak belajar banyak tetapi saya sudah siap untuk investasi, tetapi kemudian bubble harga aset kripto pecah jadinya saya tidak jadi siap untuk masuk ke investasi aset kripto,” kata Arnold.<br style=""><br style="">2. Luna Maya<br style=""><br style="">Pemain film dan sinetron yang kini juga merambah jadi presenter ini ternyata tidak hanya terkenal karena kecantikannya. Tidak hanya gemar berbisnis mulai dari kuliner hingga properti, mantan kekasih Ariel Noah ini juga suka berinvestasi. Beberapa waktu yang lalu foto Luna Maya saat melakukan verifikasi akun Bitcoin.co.id (nama Indodax sebelumnya) tersebar di dunia maya dan membuktikan bahwa dirinya adalah salah satu Bitcoiners Indonesia.<br style=""><br style="">3. Ryan Delon<br style=""><br style="">Aktor yang terkenal karena sering membintangi FTV ini juga beberapa waktu yang lalu membagikan foto verifikasinya di Bitcoin.co.id. Bitcoin ternyata sudah terbukti tidak hanya menggoda para pebisnis tapi juga selebritas Indonesia.<br style=""><br style="">4. Irfan Hakim<br style=""><br style="">Memulai karirnya sebagai aktor, pria yang kini lebih dikenal sebagai presenter acara musik ini juga ternyata memiliki akun di Indodax. Beberapa waktu yang lalu beredar foto Irfan yang melakukan verifikasi pembelian Bitcoin.<br style=""><br style="">5. Ivan Gunawan<br style=""><br style="">Artis dengan segudang talenta ini juga ternyata menyimpan ketertarikan pada kripto aset. Selain jago melawak dan mendesain baju, pria yang pernah berpacaran dengan penyanyi Rossa ini konon juga punya akun di Indodax.<br style=""><br style="">6. Syahnaz Sadiqa<br style=""><br style="">Adik kandung presenter kondang Raffi Ahmad ini juga diketahui memiliki ketertarikan kepada Bitcoin. Syahnaz yang kini sudah menikah juga tidak hanya aktif di dunia hiburan tapi juga aktif trading di Indodax.<br></p>';

  const width = Dimensions.get('window').width - 50;

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setLoading(true);
      axios
        .get(`${API_URL}/api/post/1`)
        .then(res => {
          console.log('response: ', res.data.data.indonesia);
        })
        .catch(e => console.log(e))
        .finally(() => setLoading(false));
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <ContentWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Header />
            <Text style={styles.title} category="h6">
              Kamu Perlu Tahu, Ini Deretan 6 Artis Indonesia Berinvestasi di
              Bitcoin
            </Text>
            <Gap height={20} />
            <View style={[styles.wrapper, styles.wrapperSpaceBetween]}>
              <View style={styles.wrapper}>
                <Text category="p2">31 Juli, 2021 by</Text>
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
              <LabelCategory text="investment" />
              <LabelCategory text="market" />
              <LabelCategory text="article" />
              <LabelCategory text="fashion" />
              <LabelCategory text="crypthograpy" />
              <LabelCategory text="foto" />
            </View>
            <Gap height={8} />
            <Image
              source={{
                uri: 'https://blog-api.adhiariyadi.com/uploads/posts/44581103082021fintex.png',
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
              <Text category="p2">39</Text>
            </View>
            <RenderHTML source={{html: paragraph}} contentWidth={width} />
          </>
        )}
      </ScrollView>
    </ContentWrapper>
  );
};

export default DetailArticleScreen;
