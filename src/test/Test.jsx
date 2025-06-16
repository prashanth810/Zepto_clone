import { View, Text, FlatList } from 'react-native';
import React, { useContext } from 'react';
import { Mobilecontext } from '../context/Mobilecontext';

const Test = () => {
    const { products } = useContext(Mobilecontext);

    console.log(products, "👍👍👍");
    const renderItem = ({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.brand}</Text>
            <Text>{item.price}</Text>
        </View>
    );

    return (
        <View>
            <Text style={{ fontSize: 20, margin: 10 }}>Product List</Text>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id?.toString()} // in case id is a number
            />
        </View>
    );
};

export default Test;
