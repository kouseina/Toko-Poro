import {useNavigation} from '@react-navigation/native';
import {Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {ContentWrapper, Header, ListCardNewsWithDesc} from '../../components';

const SearchScreen = () => {
  const navigation = useNavigation();
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <ContentWrapper>
      <Header autoFocus={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListCardNewsWithDesc />
      </ScrollView>
    </ContentWrapper>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
