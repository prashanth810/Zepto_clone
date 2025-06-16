import { View, Text, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Veggies } from '../../database/Databse'; // Make sure this matches the export
import { useNavigation } from '@react-navigation/native';

const Snackadndrinks = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = (screenWidth - 60) / 3;

    // Filter only snacksanddrinks
    const snackItems = Veggies.filter(item => item.category === "snacks");

    const renderCarditems = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("allproductlists", { category: item })}
                style={{
                    width: itemWidth,
                    alignItems: 'center',
                }}
            >
                <View style={{
                    backgroundColor: "#f2f2f2",
                    paddingTop: 10,
                    paddingHorizontal: 10,
                    borderRadius: 15,
                }}>
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: 80, height: 60, marginBottom: 10, borderRadius: 5 }}
                        resizeMode="cover"
                    />
                </View>

                <Text style={{ fontWeight: "600", fontSize: 12, color: "gray", textAlign: "center" }}>
                    {item.title}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#fff", paddingBottom: 56 }}>
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Snacks & Drinks</Text>
            </View>

            <FlatList
                data={snackItems}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: "space-between", marginHorizontal: 10, marginBottom: 15 }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderCarditems}
            />
        </View>
    );
};

export default Snackadndrinks;
