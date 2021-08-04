import {useNavigation} from '@react-navigation/native';
import {Icon} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SearchBox, Gap} from '..';
import {colors} from '../../../utils';

const Header = ({autoFocus}) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back-outline"
            fill={colors.primary}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Gap width={15} />
        <View style={styles.searchBox}>
          <SearchBox autoFocus={autoFocus} />
        </View>
      </View>
      <Gap height={20} />

      {/* <Icon
        name="arrow-back-outline"
        fill={colors.primary}
        style={styles.icon}
      />
      <Gap height={15} />
      <SearchBox />
      <Gap height={20} /> */}
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  icon: {width: 24, height: 24},
  searchBox: {flex: 1},
});
