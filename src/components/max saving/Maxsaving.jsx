import { View, Text, TouchableOpacity, Image, FlatList, Dimensions, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getallproductlist } from '../../redux/feactures/product page/ProductSlice';
import Angle from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 2 - 20;

const Allproductlist = () => {
    const [active, setActive] = useState("All");
    const [cartItems, setCartItems] = useState({});
    const route = useRoute();
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const { productlist, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getallproductlist());
    }, [dispatch]);

    // Extract all unique categories with image
    const categoryMap = {};
    productlist.forEach((item) => {
        if (!categoryMap[item.category]) {
            categoryMap[item.category] = {
                name: item.category,
                image: item.categoryImage || item.image,
            };
        }
    });

    const allCategories = [
        { name: 'All', image: 'https://static.toiimg.com/photo/59862737.cms' },
        ...Object.values(categoryMap)
    ];

    const filteredItems = active === "All"
        ? productlist
        : productlist.filter(item => item.category === active);

    if (loading) {
        return <ActivityIndicator style={{ flex: 1, alignItems: 'center', justifyContent: "center" }} size="large" color="green" />
    }

    const addToCart = async (itemId) => {
        if (!itemId) {
            console.log("❌ Invalid itemId");
            return;
        }

        setCartItems((prev) => {
            const updated = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
            console.log("✅ Local cart updated:", updated);
            return updated;
        });

        try {
            const savedToken = await AsyncStorage.getItem("token");
            if (savedToken) {
                console.log("📤 Sending item to backend with token:", savedToken);
                await axios.post(`${BASE_URL}/api/cart/add`, { itemId }, {
                    headers: { token: savedToken },
                });
                console.log("✅ Product added to DB");
            } else {
                console.log("❌ No token found");
            }
        } catch (error) {
            console.log("❌ API Error:", error?.response?.data || error.message);
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updated = { ...prev };
            if (updated[itemId] > 1) {
                updated[itemId] -= 1;
            } else {
                delete updated[itemId];
            }
            console.log("🗑️ Removed from cart:", updated);
            return updated;
        });
    };


    const renderItem = ({ item }) => {
        const itemCount = cartItems[item._id] || 0;
        return (
            <View
                style={{
                    backgroundColor: "#f2f2f2",
                    borderRadius: 10,
                    padding: 10,
                    marginVertical: 8,
                    width: '48%', // Ensures 2 items fit per row
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate('singleproduct', { product: item })}>
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: '100%', height: 100, borderRadius: 5, marginBottom: 8 }}
                        resizeMode="cover"
                    />
                </TouchableOpacity>

                <Text style={{ fontWeight: "bold", fontSize: 11 }}>{item.title || item.name}</Text>
                <Text style={{ color: 'gray', fontSize: 13 }}>₹{item.price}</Text>
                <View style={{ position: "absolute", bottom: 5, right: 4, marginTop: 10 }}>
                    {itemCount === 0 ? (
                        <TouchableOpacity
                            onPress={() => addToCart(item._id)}
                            style={{
                                paddingVertical: 2,
                                paddingBottom: 4,
                                paddingHorizontal: 4,
                                borderWidth: 1,
                                borderRadius: 8,
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
        )

    };


    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={{ paddingTop: 8 }}>
                <Text style={styles.mainhead}> Veggies <Text>Offers </Text></Text>
                <Text style={styles.subhead}> MAX SAVING, DELIVERED EVERYDAY </Text>
            </View>

            <View>
                <TouchableOpacity style={styles.explore}>
                    <Text style={styles.exp_mainhead}> Explore now </Text>
                    <Text style={styles.exp_mainhead}> <Angle name='angle-right' size="12" /> </Text>
                </TouchableOpacity>
            </View>

            {/* Body with Horizontal Scrollable Categories + Product Grid */}
            <View>
                <FlatList
                    data={allCategories}
                    keyExtractor={(item, index) => `${item.name}_${index}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 8 }}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => setActive(item.name)}
                            style={{
                                alignItems: "center",
                                marginHorizontal: 8,
                                borderBottomWidth: active === item.name ? 2 : 0,
                                borderBottomColor: "green",
                                paddingBottom: 6,
                            }} >
                            <Image source={{ uri: item.image }} style={{ width: 40, height: 40, borderRadius: 20, marginBottom: 4 }} />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: active === item.name ? 'bold' : 'normal',
                                color: active === item.name ? '#00796b' : '#333'
                            }}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />

                <View style={{ paddingTop: 10 }}>
                    <FlatList
                        data={filteredItems}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => `${item.id}_${index}`}
                        numColumns={2}
                        columnWrapperStyle={{
                            flexDirection: 'row',
                            columnGap: 10,
                            paddingHorizontal: 10,
                        }}
                        ItemSeparatorComponent={() => {
                            return <View style={{ width: 10 }} />
                        }}
                        contentContainerStyle={{
                            paddingBottom: 20,
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0ec0e',
        borderRadius: 12,
        marginVertical: 10,
        paddingVertical: 8
    },
    mainhead: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: 500,
        letterSpacing: 1,

    },
    subhead: {
        fontSize: 11,
        textAlign: "center",
        marginVertical: 4,
        fontWeight: 400,
    },
    explore: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "lightgray",
        width: "30%",
        margin: "auto",
        paddingVertical: 4,
        borderRadius: 20,
        backgroundColor: "#013b0a",
        marginTop: 10
    },
    exp_mainhead: {
        fontSize: 12,
        color: "#f0ec0e",
    },
    card: {
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: "transparent",
    },
    listcontainer: {
        paddingHorizontal: 10,
    },
    acivecard: {
        borderBottomColor: "blue"
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 20,
        columnGap: 40,
        resizeMode: 'cover'
    },
    categorytext: {
        fontSize: 11,
        fontWeight: 500,
        textTransform: "capitalize",
        paddingTop: 4,
    },
})