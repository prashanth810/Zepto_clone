import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getallproductlist } from '../../redux/feactures/product page/ProductSlice';
import Angleright from 'react-native-vector-icons/FontAwesome';
import Arrow from 'react-native-vector-icons/Feather';
import { styles } from '../../screens/styles';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Orderagain = () => {
    const dispatch = useDispatch();
    const [visibleCount, setVisibleCount] = useState(5); // default 5 items

    const navigation = useNavigation();

    const { productlist, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        if (!productlist || productlist.length === 0) {
            dispatch(getallproductlist());
        }
    }, []);

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 5);
    };

    const visibleProducts = productlist.slice(0, visibleCount);

    return (
        <ScrollView style={{ marginTop: 15, marginHorizontal: 8, marginBottom: 15 }}>

            {loading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#00bf5c" />
                </View>) : (
                <View>
                    {visibleProducts.map((item, i) => (
                        <View key={i} style={{ marginBottom: 10 }}>
                            <View style={styles.orders}>
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: 'center', columnGap: 20, marginVertical: 10 }}
                                    onPress={() => navigation.navigate("singleproduct", { product: item })}
                                >
                                    <Image source={{ uri: item.image }} width={50} height={50} style={{ borderRadius: 15, width: 50, height: 50 }} />
                                    <Text style={styles.header}>{item.title}</Text>
                                </TouchableOpacity>

                                <Text style={styles.orderdel}>Order delivered</Text>

                                <View style={styles.headers}>
                                    <Text style={styles.text}>Placed At {item.delivertime} Jan</Text>
                                    <View style={styles.prices}>
                                        <Text style={styles.pricevalue}>₹ {item.price}</Text>
                                        <Angleright name="angle-right" size={18} />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.reorderSection}>
                                <Text style={{ fontSize: 13, fontWeight: '500' }}>Rate Of Order</Text>
                                <View style={{ borderRightWidth: 1, borderColor: '#adadad', height: 20, marginHorizontal: 10 }} />
                                <TouchableOpacity onPress={() => navigation.navigate("allproductlists")}>
                                    <Text style={{ fontSize: 13, fontWeight: '500', color: 'red' }}>Order Again</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            )}

            {/* Load More Button */}
            {visibleCount < productlist.length && (
                <TouchableOpacity onPress={handleLoadMore} style={{ marginTop: 10, alignSelf: 'center', paddingHorizontal: 8, paddingVertical: 5, borderWidth: 1, borderColor: "red", borderRadius: 20, flexDirection: "row", alignItems: "center", columnGap: 2 }}>
                    <Text> <Arrow name='arrow-down' size={18} color={'red'} /></Text>
                    <Text style={{ color: 'red', fontSize: 13, fontWeight: 500 }}> Load More</Text>
                </TouchableOpacity>
            )}
        </ScrollView>
    )
}

export default Orderagain
