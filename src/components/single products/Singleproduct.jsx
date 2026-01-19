// Singleproduct.js
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRoute, useNavigation } from '@react-navigation/native';
import { styles } from '../../screens/styles';
import { FlatList } from 'react-native-gesture-handler';

const Singleproduct = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { product } = route.params;
    const [active, setActive] = useState(0);

    return (
        <ScrollView style={styles.container}
            showsVerticalScrollIndicator={false}>
            {/* Header */}
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 15, paddingHorizontal: 10, }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>  <FontAwesome name='angle-left' size={22} color="#000" /> </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name='hearto' size={20} color="#38635e" />
                </TouchableOpacity>
            </View>

            {/* Product Image */}
            <Image
                source={{ uri: product.image }}
                style={styles.productImage}
                resizeMode="cover"
            />

            <FlatList
                data={product.images}
                renderItem={({ item }) => (
                    <>
                        <View>
                            <Image source={{ uri: item }} width={100} height={100} />
                        </View>
                    </>

                )}
                keyExtractor={(item, i) => i.toString()}
                horizontal
                pagingEnabled
            />

            {/* <View style={styles.pagenatation}>
                {product.images.map((item, i) => {
                    return (<View
                        key={i}
                        style={[
                            styles.dots,
                            i === active && { width: 15, borderRadius: 20, backgroundColor: "purple" },
                        ]}
                    />
                    )
                })}
            </View> */}


            {/* Product Details */}
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{product.title || product.name}</Text>

                <View style={styles.priceContainer}>
                    <Text style={styles.price}>₹{product.price || "N/A"}</Text>
                    <Text style={styles.originalPrice}>₹{product.originalprice || "N/A"}</Text>
                    <Text style={styles.discount}>
                        {Math.round(((product.originalprice - product.price || "N/A") / product.originalprice * 100 || "N/A"))}% OFF
                    </Text>
                </View>

                <View style={styles.ratingContainer}>
                    <AntDesign name='star' size={16} color="#FFD700" />
                    <Text style={styles.ratingText}>{product.ratting || "N/A"}</Text>
                    <Text style={styles.deliveryText}>• Delivery in {product.delivertime || "N/A"} mins</Text>
                </View>

                <Text style={styles.weight}>Weight: {product.weight || "N/A"}</Text>

                {/* Product Description */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>{product.description || "N/A"}
                    </Text>
                </View>

                {/* Add to Cart Button */}
                <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Singleproduct;

