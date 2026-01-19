import { View, Text, TouchableOpacity, Image, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getallproductlist } from '../../redux/feactures/product page/ProductSlice';

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 2 - 20;

const Allproductlist = () => {
    const [active, setActive] = useState("All");
    const route = useRoute();
    const navigation = useNavigation();
    const { category = "All" } = route.params || {};

    const dispatch = useDispatch();

    const { productlist, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getallproductlist());
    }, []);

    console.log(productlist, '🧪 productlist');

    // Get all unique categories from Veggies data
    const allCategories = ["All", ...new Set(productlist.map(item => item.category))];

    // Filter items based on active category
    const filteredItems = active === "All"
        ? productlist
        : productlist.filter(item => item.category === active);
    if (loading) {
        return <ActivityIndicator style={{ flex: 1, alignItems: 'center', justifyContent: "center " }} />
    }
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('singleproduct', { product: item })}
            style={{
                backgroundColor: "#f2f2f2",
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 7,
                margin: 8,
                width: "45%",
            }}
        >
            <Image
                source={{ uri: item.image }}
                style={{ width: 98, height: 72, borderRadius: 5, marginBottom: 8 }}
                resizeMode="cover"
            />
            <View>
                <Text style={{ fontWeight: "bold", fontSize: 11 }}>{item.title || item.name}</Text>
                <Text style={{ color: 'gray', fontSize: 13 }}>₹{item.price}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            {/* Header */}
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 15,
                paddingVertical: 15,
                elevation: 5,
                backgroundColor: '#fff'
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name='angle-left' size={22} color="#000" />
                </TouchableOpacity>

                <Text style={{ fontSize: 16, fontWeight: '600' }}>
                    {typeof active === 'string'
                        ? active.charAt(0).toUpperCase() + active.slice(1)
                        : 'Products'}
                </Text>

                <TouchableOpacity>
                    <AntDesign name='search1' size={20} color="#38635e" />
                </TouchableOpacity>
            </View>

            {/* Body with Sidebar + Grid */}
            <View style={{ flex: 1, flexDirection: "row" }}>
                {/* Sidebar - Dynamically generated from Veggies data */}
                <View style={{
                    width: "20%",
                    // borderRightWidth: 1,
                    // borderColor: "lightgray",
                    paddingVertical: 10,
                    backgroundColor: '#fafafa'
                }}>
                    {allCategories.map((cat) => (
                        <TouchableOpacity
                            key={cat}
                            onPress={() => setActive(cat === "All" ? "All" : cat)}
                            style={{
                                padding: 12,
                                marginVertical: 4,
                                backgroundColor: active === cat ? '#e0f7fa' : 'transparent',
                                borderRadius: 5,
                                alignItems: 'center'
                            }}
                        >
                            <View>
                                <TouchableOpacity onPress={() => console.log(cat.image, '👍👍👍👍')}>
                                    {/* // undefind  */}
                                    <Image source={{ uri: cat.image }} width="20" height="20" />
                                </TouchableOpacity>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: active === cat ? 'bold' : 'normal',
                                    color: active === cat ? '#00796b' : '#333'
                                }}>
                                    {cat}
                                </Text>
                            </View>

                        </TouchableOpacity>
                    ))}
                </View>

                {/* Product Grid */}
                <View style={{ width: "80%", paddingTop: 10 }}>
                    <FlatList
                        data={filteredItems}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => `${item.id}_${index}`} // Fixed duplicate key issue
                        numColumns={2}
                        contentContainerStyle={{
                            paddingHorizontal: 5,
                        }}
                        ListEmptyComponent={
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>No products found in this category</Text>
                            </View>
                        }
                    />
                </View>
            </View>
        </View>
    );
};

export default Allproductlist;