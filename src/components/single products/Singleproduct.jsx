// Singleproduct.js
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRoute, useNavigation } from '@react-navigation/native';
import { styles } from '../../screens/styles';
import { FlatList } from 'react-native-gesture-handler';

const Singleproduct = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { product } = route.params;

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
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
                    <View>
                        <Image source={{ uri: item }} width={100} height={100} />
                    </View>
                )}
                keyExtractor={(item, i) => i.toString()}
                horizontal
                pagingEnabled
            />

            {/* Product Details */}
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{product.title}</Text>

                <View style={styles.priceContainer}>
                    <Text style={styles.price}>₹{product.price}</Text>
                    <Text style={styles.originalPrice}>₹{product.originalprice}</Text>
                    <Text style={styles.discount}>
                        {Math.round(((product.originalprice - product.price) / product.originalprice * 100))}% OFF
                    </Text>
                </View>

                <View style={styles.ratingContainer}>
                    <AntDesign name='star' size={16} color="#FFD700" />
                    <Text style={styles.ratingText}>{product.ratting}</Text>
                    <Text style={styles.deliveryText}>• Delivery in {product.delivertime} mins</Text>
                </View>

                <Text style={styles.weight}>Weight: {product.weight}</Text>

                {/* Product Description */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>{product.description}
                    </Text>
                </View>

                {/* Add to Cart Button */}
                <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Singleproduct;

