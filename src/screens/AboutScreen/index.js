import {useNavigation} from '@react-navigation/native';
import {Button, Icon, Text} from '@ui-kitten/components';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import {LangIndo} from '../../assets';
import {IconInstagram, IconYoutube} from '../../assets/icons';
import {ContentWrapper, Gap, Title} from '../../components';
import {getData} from '../../utils';

// style
import styles from './style';

const facebookURL = 'https://facebook.com';
const twitterURL = 'https://twitter.com';
const instagramURL = 'https://instagram.com';
const youtubeURL = 'https://youtube.com';

const MediaSocialButton = ({url, children, backgroundColor}) => {
  const handlePress = React.useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity
      style={[styles.bgIcon, {backgroundColor: backgroundColor}]}
      onPress={handlePress}>
      {children}
    </TouchableOpacity>
  );
};

const AboutScreen = () => {
  const [lang, setLang] = React.useState('ENG');
  const navigation = useNavigation();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData('language')
        .then(language => {
          if (language === 'ID') {
            setLang('ID');
          } else {
            setLang('ENG');
          }
        })
        .catch(e => console.log('Error language: ', e));
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <ContentWrapper>
      <ScrollView>
        <Title
          text={lang === 'ID' ? LangIndo.about.titleCreatedBy : 'created by'}
        />
        <View style={styles.wrapper}>
          <Button appearance="outline" status="warning">
            @fintex
          </Button>
          <Gap width={10} />
          <Button appearance="outline" status="warning">
            @kouseina
          </Button>
        </View>
        <Gap height={30} />
        <Title text={lang === 'ID' ? LangIndo.about.titleContact : 'contact'} />
        <View style={styles.wrapperSpaceBetween}>
          <Text style={[styles.text, {fontWeight: '700'}]}>Mobile</Text>
          <Text style={styles.text}>+62 812-34034-789 (Indonesia)</Text>
        </View>
        <View style={styles.wrapperSpaceBetween}>
          <Text style={[styles.text, {fontWeight: '700'}]}>Phone</Text>
          <Text style={styles.text}>+62 852-3094-0208 (English)</Text>
        </View>
        <View style={styles.wrapperSpaceBetween}>
          <Text style={[styles.text, {fontWeight: '700'}]}>Email</Text>
          <Text style={styles.text}>info@fintexnews.com</Text>
        </View>
        <Gap height={30} />
        <Title
          text={
            lang === 'ID' ? LangIndo.about.titleMediaSocial : 'media social'
          }
        />
        <View style={styles.wrapper}>
          <MediaSocialButton url={facebookURL} backgroundColor="#4267B2">
            <Icon name="facebook" fill="white" style={styles.icon} />
          </MediaSocialButton>
          <MediaSocialButton url={twitterURL} backgroundColor="#1DA1F2">
            <Icon name="twitter" fill="white" style={styles.icon} />
          </MediaSocialButton>
          <MediaSocialButton url={instagramURL} backgroundColor="#E1306C">
            <IconInstagram />
          </MediaSocialButton>
          <MediaSocialButton url={youtubeURL} backgroundColor="#FF0000">
            <IconYoutube />
          </MediaSocialButton>
        </View>
      </ScrollView>
    </ContentWrapper>
  );
};

export default AboutScreen;
