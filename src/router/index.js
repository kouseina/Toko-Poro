import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AboutScreen,
  DetailArticleScreen,
  HomeScreen,
  InvestmentScreen,
  SearchScreen,
  VideoScreen,
} from '../screens';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Video" component={VideoScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Investment" component={InvestmentScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp" headerMode="none">
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailArticle" component={DetailArticleScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default Router;
