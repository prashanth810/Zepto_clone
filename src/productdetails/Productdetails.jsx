import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../screens/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Productdetails = () => {
  const [count, setCount] = useState(1);
  const [heart, setHeart] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();

  const { item } = route.params;

  const handledescrease = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };
  return (
    <View style={styles.prodeatilscontainer}>
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 15,
          flexDirection: 'row',
          position: 'absolute',
          top: 0,
          zIndex: 99,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              setHeart(prev => !prev);
            }}>
            <Ionicons
              name="heart"
              size={30}
              color={heart ? '#254446' : 'gray'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={{ uri: item.image }} style={styles.prodectimg} />

      <ScrollView style={styles.details}>
        <View style={styles.titlerow}>
          <Text style={styles.producttitle}> {item.title} </Text>
          <View style={styles.pricewrapper}>
            <Text style={styles.pricetitle}> $ {item.ofprice * count} /-</Text>
          </View>
        </View>

        {/* <Text> {item.rating} </Text> */}
        <View style={styles.rotinrow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((item, i) => {
              return <Ionicons key={i} name="star" size={22} color="gold" />;
            })}
            <Text style={styles.ratingtext}> ({item.rating}) </Text>
          </View>

          <View style={styles.rating}>
            <TouchableOpacity
              onPress={() => {
                setCount(prev => prev + 1);
              }}>
              <SimpleLineIcons name="plus" size={18} color={'gray'} />
            </TouchableOpacity>
            <Text> {count} </Text>
            <TouchableOpacity onPress={handledescrease}>
              <SimpleLineIcons name="minus" size={18} color={'gray'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descrptions}>
          <Text style={styles.description}> Description </Text>
          <Text style={styles.descriptiontxt}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen
          </Text>
        </View>

        <View style={{ marginHorizontal: 10 }}>
          <View style={styles.location}>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="location-outline" size={20} color={'gray'} />
              <Text> hyderabad </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                size={20}
                color={'gray'}
              />
              <Text> Free delivery </Text>
            </View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 10, paddingTop: 18 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text> Sub Total : </Text>
            <Text> ${item.ofprice * count} /- </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 6,
            }}>
            <Text> Delivery : </Text>
            <Text> 200 /- </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 15,
            }}>
            <Text style={{ fontWeight: 600 }}> Total : </Text>
            <Text style={{ fontSize: 18, fontWeight: 700 }}>
              ${item.ofprice * count + 200} /-
            </Text>
          </View>
        </View>

        <View style={styles.cartrow}>
          <TouchableOpacity onPress={() => { }} style={styles.cartbtn}>
            <TouchableOpacity style={styles.cartbtn}>
              <View style={styles.cartrowbtn}>
                <Text style={styles.carttext}>BUY NOW</Text>
                <FontAwesome5 name="truck-loading" size={21} color="white" />
              </View>
            </TouchableOpacity>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { }} style={styles.ddtocartbtn}>
            <Fontisto name="shopping-bag" size={22} color={'white'} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Productdetails;
