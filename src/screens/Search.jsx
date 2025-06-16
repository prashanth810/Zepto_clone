import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [randomImage, setRandomImage] = useState('');
  const navigation = useNavigation();

  // ✅ Fetch data on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        'https://63de1e7cf1af41051b0dc6a3.mockapi.io/Data/Api',
      );
      setData(response.data);

      // ✅ Select a random image from the data
      if (response.data.length > 0) {
        const randomItem =
          response.data[Math.floor(Math.random() * response.data.length)];
        setRandomImage(randomItem.image);
      }
    } catch (error) {
      console.log('Fetch error:', error.message);
    }
  };

  // ✅ Handle search & filter results
  const handleSearch = text => {
    setSearch(text);

    if (text.trim() === '') {
      setFilteredData([]); // ✅ Show nothing when search is empty
    } else {
      const filtered = data.filter(
        item =>
          (item.title &&
            item.title.toLowerCase().includes(text.toLowerCase())) ||
          (item.category &&
            item.category.toLowerCase().includes(text.toLowerCase())),
      );

      setFilteredData(filtered);
    }
  };

  return (
    <View>
      {/* 🔍 Search Bar */}
      <View style={styles.searchcontainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={22} style={styles.searchicon} />
        </TouchableOpacity>
        <View style={styles.searchwrapper}>
          <TextInput
            style={[styles.searchinput, { color: 'black' }]}
            value={search}
            onChangeText={handleSearch} // ✅ Fixed input issue
            placeholder="What are you looking for?"
            placeholderTextColor="gray"
          />
        </View>
        <TouchableOpacity
          style={styles.searchbtn}
          onPress={() => handleSearch(search)}>
          <Ionicons name="search" size={22} style={styles.camicons} />
        </TouchableOpacity>
      </View>

      {/* 🖼️ Show Random Image When Not Searching */}
      {/* <Image
        source={require('../assets/searching.avif')}
        width={200}
        height={200}
      /> */}

      {/* 📦 Display Filtered Results */}
      {/* {search.length === 0 ? ("") : ("")} */}
      {search.trim() !== '' && filteredData.length > 0 ? (
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                rowGap: 10,
                marginHorizontal: 2,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#254446',
                borderRadius: 10,
                paddingHorizontal: 10,
                marginBottom: 10,
              }}
              onPress={() => {
                navigation.navigate('productdetails', { item });
              }}>
              <View>
                <View
                  style={{
                    alignItems: 'center',
                    paddingHorizontal: 3,
                    paddingVertical: 5,
                  }}>
                  <Image source={{ uri: item.image }} width={80} height={80} />
                </View>
                <View>
                  <Text>{item.title}</Text>
                  <Text style={{ fontSize: 12, color: 'gray' }}>
                    {item.catagory}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : search.trim() !== '' ? (
        <Text
          style={{
            textAlign: 'center',
          }}>
          🔍 No results <Text style={{ color: 'green' }}>{`${search}`}</Text>
          <Text> found... </Text>
        </Text>
      ) : null}
    </View>
  );
};

export default Search;
