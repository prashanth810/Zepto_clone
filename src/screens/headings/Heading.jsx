import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Heading = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.headingcontainer}>
        <View style={styles.header}>
          <Text style={styles.headertext}> New Rivals </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('newarrivals');
            }}>
            <Ionicons name="grid" size={22} color="#254446" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Heading;
