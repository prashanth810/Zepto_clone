import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {styles} from '../screens/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import ProductList from '../productdetails/Productlist';

const Newarraivals = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.newarrivalcontainer}>
      <View style={styles.main}>
        <View style={styles.upperrow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30} color={'white'} />
          </TouchableOpacity>
          <Text style={styles.headingtxt}> Products </Text>
        </View>
        <ProductList />
      </View>
    </View>
  );
};

export default Newarraivals;
