import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import Productcart from './Productcart';
import {Mobilecontext} from '../context/Mobilecontext';

const ProductList = () => {
  const {data, loading, error} = useContext(Mobilecontext);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Productcart item={item} />}
        horizontal
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  listContainer: {
    columnGap: 15,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    width: 200,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
    marginTop: 2,
  },
  description: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
  },
});

export default ProductList;
