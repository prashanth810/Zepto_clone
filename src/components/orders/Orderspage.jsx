import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Veggies } from '../../database/Databse';
import Angleright from 'react-native-vector-icons/FontAwesome';
import { styles } from '../../screens/styles';
import { useNavigation } from '@react-navigation/native';

const Orderspage = () => {
    // 🧠 Store count per item using index as key
    const [count, setCount] = useState({});

    const navigation = useNavigation();

    // ✅ Increment count for specific item
    const handleinccount = (index) => {
        setCount((prev) => ({
            ...prev,
            [index]: (prev[index] || 0) + 1,
        }));
    };

    // ✅ Decrement count and remove if <= 0
    const handledeccount = (index) => {
        setCount((prev) => {
            const newCount = (prev[index] || 0) - 1;
            if (newCount <= 0) {
                const updated = { ...prev };
                delete updated[index];
                return updated;
            }
            return {
                ...prev,
                [index]: newCount,
            };
        });
    };

    // 🔁 Render each featured item card
    const renderFeatureItems = ({ item, index }) => {
        const itemCount = count[index] || 0; // Get current count for this item

        return (
            <View style={styles.featureCard}>
                {/* Image */}
                <Image
                    source={{ uri: item.image }}
                    style={styles.featureImage}
                />

                {/* Title */}
                <Text style={styles.featureTitle}>{item.title}</Text>

                {/* Count or Add Button */}
                <View style={{ marginTop: 10, width: '100%' }}>
                    {itemCount > 0 ? (
                        // ✅ Show - count + layout
                        <View style={styles.countContainer}>
                            <TouchableOpacity
                                style={styles.countButtonLeft}
                                onPress={() => handledeccount(index)}
                            >
                                <Text style={styles.countText}>-</Text>
                            </TouchableOpacity>

                            <Text>{itemCount}</Text>

                            <TouchableOpacity
                                style={styles.countButtonRight}
                                onPress={() => handleinccount(index)}
                            >
                                <Text style={styles.countText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        // 🛒 Add to cart button
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => handleinccount(index)}
                        >
                            <Text style={styles.countText}>Add to Cart</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        );
    };

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                marginBottom: 65,
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
                {Veggies.slice(0, 1).map((item, i) => (
                    <View key={i} style={{ marginBottom: 10 }}>
                        <View style={styles.orders}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 20, marginVertical: 10 }}>
                                <Image source={{ uri: item.image }} width={50} height={50} style={{ borderRadius: 15 }} />
                                <Text style={styles.header}>{item.title}</Text>
                            </View>

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
                    data={Veggies}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderFeatureItems}
                    horizontal
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                />
            </View>
        </ScrollView>
    );
};



export default Orderspage;
