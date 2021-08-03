import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CryptoScreen,
  DetailArticleScreen,
  HomeScreen,
  InvestmentScreen,
  TrendsScreen,
} from '../screens';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Trends" component={TrendsScreen} />
      <Tab.Screen name="Crypto" component={CryptoScreen} />
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
    </Stack.Navigator>
  );
};

export default Router;
