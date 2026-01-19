import { View, Text, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../../config/Config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getallproductlist } from '../../redux/feactures/product page/ProductSlice';
import httpClient from '../../redux/service/Service';

const Veggieslist = () => {
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = screenWidth / 3;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const { productlist } = useSelector((state) => state.products);

    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState(null);

    // ✅ Load token from AsyncStorage
    useEffect(() => {
        const loadToken = async () => {
            try {
                const savedToken = await AsyncStorage.getItem("token");
                setToken(savedToken);
            } catch (error) {
                console.log("❌ Error loading token:", error);
            }
        };
        loadToken();
    }, []);

    // ✅ Log whenever cart updates
    useEffect(() => {
        console.log("🛒 Cart Items Updated:", cartItems);
    }, [cartItems]);

    // ✅ Fetch product list
    useEffect(() => {
        dispatch(getallproductlist());
    }, []);

    // const addToCart = async (itemId) => {
    //     if (!itemId) {
    //         console.log("❌ Invalid itemId");
    //         return;
    //     }

    //     setCartItems((prev) => {
    //         const updated = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
    //         console.log("✅ Local cart updated:", updated);
    //         return updated;
    //     });

    //     try {
    //         const savedToken = await AsyncStorage.getItem("token");
    //         if (savedToken) {
    //             console.log("📤 Sending item to backend with token:", savedToken);
    //             await axios.post(`${BASE_URL}/api/cart/add`, { itemId }, {
    //                 headers: { token: savedToken },
    //             });
    //             console.log("✅ Product added to DB");
    //         } else {
    //             console.log("❌ No token found");
    //         }
    //     } catch (error) {
    //         console.log("❌ API Error:", error?.response?.data || error.message);
    //     }
    // };

    console.log(token, 'ttttttttttttttttttttttttttttttt')

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }

        if (token) {
            try {
                httpClient.post(`/api/cart/add`, { itemId }, { headers: { token } })
            }
            catch (error) {
                console.log(error);
            }
        }
    };

    // const removeFromCart = (itemId) => {
    //     setCartItems((prev) => {
    //         const updated = { ...prev };
    //         if (updated[itemId] > 1) {
    //             updated[itemId] -= 1;
    //         } else {
    //             delete updated[itemId];
    //         }
    //         console.log("🗑️ Removed from cart:", updated);
    //         return updated;
    //     });
    // };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0 }));
        if (token) {
            try {
                httpClient.post(`/api/cart/remove`, { itemId }, { headers: { token } })
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    // ✅ Safely slice product list
    const firstItem = Array.isArray(productlist) ? productlist.slice(0, 5) : [];

    const renderCartItems = ({ item }) => {
        const itemCount = cartItems[item._id] || 0;

        return (
            <View style={{
                width: itemWidth,
                padding: 10,
                backgroundColor: "white",
                marginHorizontal: 5,
                borderRadius: 11,
                marginTop: 10,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('singleproduct', { product: item })}>
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: 100, height: 80, borderRadius: 8 }}
                        resizeMode="cover"
                    />
                    <View>
                        <View style={{
                            backgroundColor: "lightgray",
                            width: 50,
                            flexDirection: "row",
                            alignItems: "center",
                            paddingBottom: 4,
                            paddingHorizontal: 5,
                            borderRadius: 10,
                            marginTop: 2
                        }}>
                            <Text style={{ color: 'black', marginTop: 5, fontSize: 8 }}>
                                <SimpleLineIcons name='fire' size={10} /> {item.delivertime || "N/A"} Mins
                            </Text>
                        </View>
                        <Text style={{ color: 'black', marginTop: 5, fontSize: 11, fontWeight: '500' }}>
                            {item.title || item.name}
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 8, paddingVertical: 4 }}>
                            <Text style={{ color: 'black', fontSize: 14, fontWeight: '500' }}>
                                ₹{item.price || "N/A"}
                            </Text>
                            <Text style={{ textDecorationLine: "line-through", fontSize: 12, color: "gray", paddingTop: 2 }}>
                                ₹{item.originalprice || "N/A"}
                            </Text>
                        </View>
                        <Text style={{ fontSize: 12, marginTop: 3 }}>
                            {item.weight < 1000
                                ? `${item.weight || "N/A"} mg`
                                : `${(item.weight / 1000).toFixed(2)} kg`}
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={{ position: "absolute", bottom: 5, right: 4, }}>
                    {itemCount === 0 ? (
                        <TouchableOpacity
                            onPress={() => addToCart(item._id)}
                            style={{
                                paddingVertical: 2, paddingBottom: 4, paddingHorizontal: 4, borderWidth: 1, borderRadius: 8,
                                borderColor: "lightgray"
                            }}
                        >
                            <Text style={{ fontSize: 10, color: '#4ade80', fontWeight: '600' }}>🛒</Text>
                        </TouchableOpacity>
                    ) : (
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            borderColor: '#10b981',
                            borderWidth: 1,
                            borderRadius: 20,
                            paddingHorizontal: 2,
                            paddingVertical: 2,
                        }}>
                            <TouchableOpacity onPress={() => removeFromCart(item._id)}>
                                <Text style={{ fontSize: 16, color: '#10b981', fontWeight: 'bold' }}> - </Text>
                            </TouchableOpacity>
                            <Text style={{ marginHorizontal: 10, fontSize: 14 }}>{itemCount}</Text>
                            <TouchableOpacity onPress={() => addToCart(item._id)}>
                                <Text style={{ fontSize: 16, color: '#10b981', fontWeight: 'bold' }}> + </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    return (
        <View style={{ backgroundColor: "#ebf7fa", paddingBottom: 10 }}>
            <Text style={{ color: "black", fontSize: 24, textAlign: "center", marginVertical: 10 }}>
                SALE IS LIVE
            </Text>

            {/* ✅ Debug FlatList input */}
            <FlatList
                keyExtractor={(item) => item._id?.toString()}
                data={firstItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderCartItems}
            />
        </View>
    );
};

export default Veggieslist;
