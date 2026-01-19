import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Veggies } from '../../database/Databse'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getallproductlist } from '../../redux/feactures/product page/ProductSlice';


const Buyagain = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const { productlist, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getallproductlist());
    }, []);

    if (loading) {
        return <ActivityIndicator style={{ flex: 1, alignItems: "center", justifyContent: 'center' }} />
    }

    const buynow = [
        ...productlist.slice(0, 8),
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
                <Image source={{ uri: item.image || "N/A" }} width={100} height={100} style={{ margin: "auto", borderRadius: 10 }} />
                <View style={{ paddingTop: 8 }}>
                    <Text style={{ fontSize: 12, fontWeight: '700' }}>{item.title || item.name}</Text>
                    <Text style={{ fontSize: 11, fontWeight: '500' }}>{item.price || "N/A"}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 11, fontWeight: '500' }}>${item.weight || "N/A"}</Text>
                        <Text style={{ fontSize: 11, fontWeight: '500' }}>{item.ratting || "N/A"}</Text>
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
