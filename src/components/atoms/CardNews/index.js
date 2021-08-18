import React from 'react';
import {Card, Layout, Text} from '@ui-kitten/components';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LabelCategory from '../LabelCategory';
import Gap from '../Gap';
import {useNavigation} from '@react-navigation/native';

const CardNews = ({image, title, onPress, desc, tags, key}) => {
  let strippedDescHtml;
  const navigation = useNavigation();

  if (desc) {
    strippedDescHtml = desc.replace(/(<([^>]+)>)/gi, '');
  }

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
            <View style={styles.wrapperCategory}>
              {tags.map((tag, index) => (
                <LabelCategory
                  text={tag.name}
                  key={tag.tags_id}
                  onPress={() =>
                    navigation.navigate('Search', {
                      tagsId: tag.tags_id,
                      tagsName: tag.name,
                      autoFocus: false,
                    })
                  }
                />
              ))}
            </View>
          </View>
          <Text style={styles.title} numberOfLines={3}>
            {title}
          </Text>
          {desc && (
            <>
              <Gap height={2} />
              <Text style={styles.desc} category="c1" numberOfLines={4}>
                {strippedDescHtml}
              </Text>
              {/* <RenderHTML
                source={{html: desc}}
                contentWidth={width}
                defaultTextProps={{numberOfLines: 3}}
              /> */}
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
    minHeight: 150,
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
