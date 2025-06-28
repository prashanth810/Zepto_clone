import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Veggies } from '../../../database/Databse';
// import { BASE_URL } from '../../../config/Config';


const Selectedcategorydata = ({ activeid }) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (activeid) {
            const newData = Veggies.filter(item => item.id === activeid);
            setFilteredData(newData);
        }
    }, [activeid]);


    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.itemtext}>{item.title}</Text> {/* or any property you want to show */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 4 }}>
                <Text style={styles.itemtext}>Rs: {item.price}</Text>
                <Text style={styles.itemtext}>{item.weight}</Text>
            </View>
            <TouchableOpacity style={styles.addtocart}>
                <Text style={styles.addcatdtext}> Add To Cart </Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>All Categories</Text>
            <FlatList
                data={filteredData}
                keyExtractor={(item, index) => index.toString() || item.id?.toString()}
                renderItem={(item) => renderItem(item)}
                horizontal
                contentContainerStyle={{ paddingBottom: 20 }}
                ItemSeparatorComponent={() => {
                    return (<View style={{ width: 10 }} />)
                }}
            />
        </View>
    );
};

export default Selectedcategorydata;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card: {
        padding: 12,
        backgroundColor: "#f5f5f5",
        // borderBottomWidth: 1,
        // // borderBottomColor: '#ccc',
        borderRadius: 10,
        // marginRight:10,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
    itemtext: {
        fontSize: 12,
    },
    addtocart: {
        // backgroundColor: "#fc750d",
        alignItems: "center",
        paddingVertical: 2,
        marginTop: 5,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#f06a02",
    },
    addcatdtext: {
        color: "#f06a02",
        fontSize: 12,
    },
});
