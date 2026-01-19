import { View, Text, FlatList, TouchableOpacity, Dimensions, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getallproductlist } from '../../redux/feactures/product page/ProductSlice';

const Snackadndrinks = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = (screenWidth - 60) / 3;

    const dispatch = useDispatch();

    const { productlist, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getallproductlist());
    }, [dispatch]);

    console.log(productlist, '🧪 productlist');
    // Filter only snacksanddrinks
    const veggies = productlist.filter(item => item.category === "veg");

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
                    {item.title || item.name}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#fff", paddingBottom: 56 }}>
            <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Vegg pickles</Text>
            </View>

            <FlatList
                data={veggies}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: "space-between", marginHorizontal: 10, marginBottom: 15 }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderCarditems}
            />
        </View>
    );
};

export default Snackadndrinks;
