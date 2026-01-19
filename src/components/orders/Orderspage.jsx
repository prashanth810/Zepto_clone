import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Veggies } from '../../database/Databse';
import Angleright from 'react-native-vector-icons/FontAwesome';
import { styles } from '../../screens/styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getallproductlist } from '../../redux/feactures/product page/ProductSlice';
import Spinner from 'react-native-loading-spinner-overlay';
import Arrow from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import httpClient from '../../redux/service/Service';
import Orderagain from './Orderagain';
import Shop from 'react-native-vector-icons/Feather';

const Orderspage = () => {
    const [count, setCount] = useState({});
    const [cartItems, setCartItems] = useState([]);
    const navigation = useNavigation();

    // const token = AsyncStorage.getItem("token");
    const token = AsyncStorage.getItem("token");

    console.log(token, 'tttttttttttttttttttttttttttttt')

    const dispatch = useDispatch();

    const { productlist, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getallproductlist());
    }, [dispatch]);

    const [visibleCount, setVisibleCount] = useState(5); // default 5 items

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 5);
    };

    const visibleProducts = productlist.slice(0, visibleCount);

    console.log(productlist, '🧪 productlist');

    // ✅ Increment count for specific item
    const handleinccount = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            try {
                httpClient.post(`/api/cart/add`, { itemId }, { headers: { token } });
            }
            catch (error) {
                console.log(error);
            }
        }
    };


    console.log(cartItems, 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');

    // ✅ Decrement count and remove if <= 0
    const handledeccount = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0 }));
        if (token) {
            try {
                httpClient.post(`/api/cart/remove`, { itemId }, { headers: { token } });
            }
            catch (error) {
                console.log(error);
            }
        }
    };

    if (loading) {
        return <Spinner
            visible={true}
            textContent={'Loading...'}
            textStyle={{ color: '#FFF' }}
        />
    }

    if (error) {
        return <Text> {error} </Text>
    }

    // 🔁 Render each featured item card
    const renderFeatureItems = ({ item, index }) => {
        const itemCount = count[index] || 0; // Get current count for this item

        return (
            <TouchableOpacity style={styles.featureCard} onPress={() => navigation.navigate("singleproduct", { product: item })}>
                {/* Image */}
                <Image
                    source={{ uri: item.image }}
                    style={styles.featureImage}
                />

                {/* Title */}
                <Text style={styles.featureTitle}>{item.name}</Text>

                {/* Count or Add Button */}
                <View style={{ marginTop: 10, width: '100%' }}>
                    {itemCount === 0 ? (
                        // 🛒 Add to cart button
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => handleinccount(item._id)}
                        >
                            <View style={styles.cartbtns}>
                                <Text style={styles.countText}> <Shop name='shopping-cart' size={12} />  </Text>
                                <Text style={styles.countText}>  Add to Cart</Text>
                            </View>
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.countContainer}>
                            <TouchableOpacity
                                style={styles.countButtonLeft}
                                onPress={() => handledeccount(item._id)}
                            >
                                <Text style={styles.countText}>-</Text>
                            </TouchableOpacity>

                            <Text>{itemCount}</Text>

                            <TouchableOpacity
                                style={styles.countButtonRight}
                                onPress={() => handleinccount(item.id)}
                            >
                                <Text style={styles.countText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                marginBottom: 25,
                backgroundColor: '#edf7f3',
            }}
        >
            {/* Page Header */}
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.pageHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="chevron-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.pageHeaderText}>Orders</Text>
                </View>
            </View>

            {/* Delivered Orders */}
            <View style={styles.orderdspage}>
                {productlist.slice(0, 1).map((item, i) => (
                    <View key={i} style={{ marginBottom: 10 }}>
                        <View style={styles.orders}>
                            <TouchableOpacity key={i} style={{ flexDirection: 'row', alignItems: 'center', columnGap: 20, marginVertical: 10 }} a onPress={() => navigation.navigate("singleproduct", { product: item })}>
                                <Image source={{ uri: item.image }} width={50} height={50} style={{ borderRadius: 15 }} />
                                <Text style={styles.header}>{item.title}</Text>
                            </TouchableOpacity>

                            <Text style={styles.orderdel}>Order delivered</Text>

                            <View style={styles.headers}>
                                <Text style={styles.text}>Placed At {item.delivertime} Jan</Text>
                                <View style={styles.prices}>
                                    <Text style={styles.pricevalue}>₹ {item.price}</Text>
                                    <Text><Angleright name="angle-right" size={18} /></Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.reorderSection}>
                            <Text style={{ fontSize: 13, fontWeight: 500 }}>Rate Of Order</Text>
                            <View style={{ borderRightWidth: 1, borderColor: '#adadad', height: 20 }} />
                            <TouchableOpacity onPress={() => navigation.navigate("allproductlists")}>
                                <Text style={{ fontSize: 13, fontWeight: 500, color: 'red' }}>Order Again</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>

            {/* Featured Items */}
            <View style={styles.featureContainer}>
                <Text>Featured for You</Text>
                <FlatList
                    data={productlist}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderFeatureItems}
                    horizontal
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                />
            </View>

            <Orderagain />

        </ScrollView>
    );
};

export default Orderspage;
