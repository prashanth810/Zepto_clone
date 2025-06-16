import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Homepage from '../screens/Homepage';
import Allcategories from '../components/categories/Allcategories';
import Wellcome from '../components/wellcome page/Wellcome';
import Cart from '../cart/Cart';
import Landingpage from '../components/loading/Landingpage';

const Tab = createBottomTabNavigator();

const Bottomnavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          right: 0,
          left: 0,
          elevation: 0,
          height: 68,
          paddingTop: 10,
        },
      }}>
      <Tab.Screen
        name="home"
        component={Wellcome}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Feather
                name="arrow-left-circle"
                size={25}
                color={focused ? '#254446' : 'gray'}
              />
              <Text style={{ fontSize: 10, }}>Back</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="landing"
        component={Landingpage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name="home"
                size={26}
                color={focused ? '#254446' : 'gray'}
              />
              <Text style={{ fontSize: 10, }}>Home</Text>
            </View>

          ),
        }}
      />

      <Tab.Screen
        name="categories"
        component={Allcategories}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ width: 50, alignItems: 'center' }}>
              <MaterialCommunityIcons
                name="view-grid-plus"
                size={26}
                color={focused ? '#254446' : 'gray'}
              />
              <Text style={{ fontSize: 10, }}>Categories</Text>
            </View>

          ),
        }}
      />

      <Tab.Screen
        name="search"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign
                name="shoppingcart"
                size={24}
                color={focused ? '#254446' : 'gray'}
              />
              <Text style={{ fontSize: 10, }}>Cart</Text>
            </View>

          ),
        }}
      />
      {/* <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search"
              size={22}
              color={focused ? '#254446' : 'gray'}
            />
          ),
        }}
      /> */}

      {/* <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={22}
              color={focused ? '#254446' : 'gray'}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default Bottomnavigator;
