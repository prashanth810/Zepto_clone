import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from '../screens/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Productcart = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('productdetails', { item });
        }}>
        <View style={styles.strcont}>
          <View style={styles.imgcontainer}>
            <Image source={{ uri: item.image }} style={[styles.imgstyle]} />
          </View>
          <View style={styles.prodeatils}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.supplier} numberOfLines={1}>
              {item.catagory}
            </Text>

            <View>
              <Text style={styles.price} numberOfLines={1}>
                Original price : $ {item.orprice}
              </Text>
              <Text style={styles.price} numberOfLines={1}>
                offerd price : $ {item.ofprice}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.addbtn}
            onPress={() => navigation.navigate('cart')}>
            <Ionicons name="add-circle" size={32} color="#254446" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Productcart;
