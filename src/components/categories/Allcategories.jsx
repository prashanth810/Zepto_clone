import { View, Text, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Veggies, snacks } from '../../database/Databse';
import { useNavigation } from '@react-navigation/native';
import Snackadndrinks from '../snacks and drinks/Snackadndrinks';
import { ScrollView } from 'react-native-gesture-handler';

const Allcategories = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = (screenWidth - 60) / 3;

    const uniqueCategories = [...new Set(Veggies.map(item => item.category))];

    const renderCarditems = ({ item }) => {
        const firstItem = Veggies.find(product => product.category === item);

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
                    paddingTop: 6,
                    paddingHorizontal: 10,
                    borderRadius: 15,
                }}>
                    <Image
                        source={{ uri: firstItem?.image }}
                        style={{ width: 80, height: 60, marginBottom: 10, borderRadius: 5 }}
                        resizeMode="cover"
                    />
                </View>

                <Text style={{ fontWeight: "600", fontSize: 12, color: "gray" }}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            {/* Header */}
            <View style={{ paddingVertical: 13 }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginHorizontal: 15,
                }}>
                    <Text></Text>
                    <Text style={{ fontSize: 18, fontWeight: "500" }}>
                        All Categories
                    </Text>
                    <AntDesign name='search1' style={{ fontSize: 23 }} />
                </View>
            </View>

            <View style={{ marginVertical: 15, marginHorizontal: 10, }}>
                <Text style={{ fontSize: 16, fontWeight: 600 }}> Grocery & Kitchen </Text>
            </View>

            {/* Grid */}
            <FlatList
                data={uniqueCategories}
                keyExtractor={(item) => item.id}
                numColumns={3}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 15 }}
                renderItem={renderCarditems}
            />

            {/* snacks products  */}
            <Snackadndrinks />
        </ScrollView>

    );
};

export default Allcategories;
