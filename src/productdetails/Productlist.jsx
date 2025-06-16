import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {styles} from '../screens/styles';
import {Mobilecontext} from '../context/Mobilecontext';
import {FlatList} from 'react-native-gesture-handler';
import Productcart from './Productcart';

const Productlist = () => {
  const {data, loading, error} = useContext(Mobilecontext);
  if (loading) {
    return (
      <View style={styles.productlistcontainer}>
        <ActivityIndicator size={30} color={'red'} />
      </View>
    );
  }
  return (
    <View style={styles.prodlistdatacontainer}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.cartItems}>
            <Productcart item={item} />
          </View>
        )}
        contentContainerStyle={styles.flatcontainer}
        ItemSeparatorComponent={() => <View style={styles.supperator} />}
        numColumns={2}
        style={styles.flatlistcarts}
      />
    </View>
  );
};

export default Productlist;
