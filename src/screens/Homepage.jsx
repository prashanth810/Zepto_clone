import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { ScrollView } from 'react-native-gesture-handler';
import Wellcomepage from './Wellcomepage';
import Caroseal from './caroseal/Caroseal';
import Heading from './headings/Heading';
import Productraw from '../productdetails/Productraw';

const Homepage = () => {
  return (
    <View>
      <View style={styles.homebar}>
        <View style={styles.appBar}>
          <View style={styles.appBar}>
            <Ionicons name="location-outline" size={22} />
            <Text style={styles.location}> Hyderabad </Text>
          </View>

          <View style={{ alignItems: 'flex-end' }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartnumber}> 6 </Text>
            </View>
            <TouchableOpacity style={styles.shopingbag}>
              <Fontisto name="shopping-bag" size={22} color={'#254446'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <Wellcomepage />
        {/* <Caroseal /> */}
      </ScrollView>
      <Heading />
      <Productraw />
    </View>
  );
};

export default Homepage;
