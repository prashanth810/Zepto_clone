import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Veggies } from '../../database/Databse'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const Buyagain = () => {
    const navigation = useNavigation();

    const buynow = [
        ...Veggies.slice(0, 8),
        { id: 'see-all', isSeeAll: true }
    ];


    const renderbuyagainitems = (item) => {
        if (item.isSeeAll) {
            // Last "See All" item
            return (
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#ededed', borderRadius: 14 }} onPress={() => navigation.navigate("allproductlists")}>
                    <Text style={{ fontSize: 14, fontWeight: '600' }}>
                        See All
                    </Text>
                    <AntDesign name="arrowright" size={20} color="#000" />
                </TouchableOpacity>
            );
        }

        // Normal veggie item
        return (
            <TouchableOpacity style={{ backgroundColor: "#ededed", paddingHorizontal: 6, borderRadius: 14, paddingVertical: 10 }} onPress={() => { navigation.navigate("singleproduct", { product: item }) }}>
                <Image source={{ uri: item.image }} width={100} height={100} style={{ margin: "auto", borderRadius: 10 }} />
                <View style={{ paddingTop: 8 }}>
                    <Text style={{ fontSize: 12, fontWeight: '700' }}>{item.title}</Text>
                    <Text style={{ fontSize: 11, fontWeight: '500' }}>{item.price}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 11, fontWeight: '500' }}>${item.weight}</Text>
                        <Text style={{ fontSize: 11, fontWeight: '500' }}>{item.ratting}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };



    return (
        <View style={{ marginHorizontal: 8 }}>
            <Text style={{ fontSize: 20, textAlign: "center", paddingVertical: 16 }}>Buy<Text style={{ color: "#58027d", textDecorationLine: "underline", }}> Again </Text></Text>

            <FlatList
                data={buynow}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => renderbuyagainitems(item)}
                numColumns={3}
                ItemSeparatorComponent={() => <View style={{ height: 8, }} />}
                columnWrapperStyle={{ justifyContent: 'space-evenly', columnGap: 3 }}
            />

        </View>
    )
}


export default Buyagain
