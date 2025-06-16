import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Father from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Wellcomepage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wellcontainer}>
      <View style={styles.homecont}>
        <Text style={styles.wellcometext}> Find The Most </Text>
        <Text style={styles.wellcometext2}> Luxurious Mobiles </Text>
      </View>

      <View style={styles.searchcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate('search')}>
          <Father name="search" size={22} style={styles.searchicon} />
        </TouchableOpacity>
        <View style={styles.searchwrapper}>
          <TextInput
            style={styles.searchinput}
            value=""
            placeholder="What are you Looking for"
            placeholderTextColor="gray"
            onPress={() => navigation.navigate('search')}
          />
        </View>
        <TouchableOpacity style={styles.searchbtn}>
          <Ionicons name="camera-outline" size={30} style={styles.camicons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Wellcomepage;
