import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Arrow from 'react-native-vector-icons/FontAwesome'
import { useDispatch, useSelector } from 'react-redux';
import { getallproductlist } from '../../../redux/feactures/product page/ProductSlice';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Circlecheck from 'react-native-vector-icons/Feather';
import Angleright from 'react-native-vector-icons/FontAwesome';
import Angle from 'react-native-vector-icons/FontAwesome';

const faqs = [
    { id: 1, name: "Coupons & Offers", icon: `angle-right`, navlinks: 'couponsandoffers' },
    { id: 2, name: "General Inquiry", icon: `angle-right`, navlinks: 'generalinfo' },
    { id: 3, name: "Payment Related", icon: `angle-right`, navlinks: 'couponsandoffers' },
    { id: 4, name: "Feedback & Suggestions", icon: `angle-right`, navlinks: 'couponsandoffers' },
    { id: 5, name: "Order /Product Related", icon: `angle-right`, navlinks: 'couponsandoffers' },
    { id: 7, name: "Gift Card", icon: `angle-right`, navlinks: 'couponsandoffers' },
    { id: 8, name: "No-Cost EMI", icon: `angle-right`, navlinks: 'couponsandoffers' },
    { id: 9, name: "Wallet Related", icon: `angle-right`, navlinks: 'couponsandoffers' },
    { id: 10, name: "Pickles Super Saver", icon: `angle-right`, navlinks: 'couponsandoffers' },
    { id: 11, name: "Pickles Daily", icon: `angle-right`, navlinks: 'couponsandoffers' },
];

const Helpandsupport = () => {
    const dispatch = useDispatch();

    const { productlist, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getallproductlist());
    }, []);

    if (loading) {
        return <ActivityIndicator style={{ height: 100, justifyContent: 'center', alignItems: "center" }} />
    }

    const navigation = useNavigation();
    return (
        <ScrollView style={styles.main}>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                paddingVertical: 18,
                elevation: 5,
                backgroundColor: '#fff',
                columnGap: 25,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name='angle-left' size={22} color="#000" />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: '600' }}> Help & Support </Text>
            </View>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headtext}>Get Help on order </Text>
                    <TouchableOpacity style={styles.seeallbtn} onPress={() => navigation.navigate("orderagain")}>
                        <Text style={styles.sellall}> See All </Text>
                        <Text style={styles.sellall}> <Arrow name='angle-right' size={16} /> </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <FlatList
                        data={productlist.slice(0, 2)}
                        keyExtractor={(item, i) => i.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.carts}>
                                    <Image source={{ uri: item.image }} width={50} height={50} style={{ borderRadius: 10 }} />

                                    <View style={styles.ordhead}>
                                        <Text style={styles.ordertxt}>Order delivered <Circlecheck name='check-circle' size={12} /></Text>
                                        <View style={styles.cartprices}>
                                            <Text style={styles.ordplaced}> Placed at 22 Jun 2025 , 6:30 pm</Text>

                                            <View style={styles.prices}>
                                                <Text style={styles.prices}> ₹ {item.price} </Text>
                                                <Angleright name="angle-right" size={18} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>

            </View>

            <View>
                <Text style={styles.faqhead}>FAQs</Text>

                <View style={styles.faqmargin}>
                    {faqs.map((item, i) => {
                        const islast = i === faqs.length - 1;
                        return (
                            <TouchableOpacity style={[styles.faqs,
                            islast && { borderBottomWidth: 0 }]} onPress={() => navigation.navigate(item.navlinks)}>
                                <Text style={styles.itemname}> {item.name} </Text>
                                <Text> <Angle name={item.icon} size={16} color={'red'} /> </Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    )
}

export default Helpandsupport

const styles = StyleSheet.create({
    main: {
        marginBottom: 12,
        backgroundColor: '#e8f4fc',
    },
    container: {
        paddingHorizontal: 12,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    headtext: {
        fontSize: 16,
        fontWeight: 600,
    },
    seeallbtn: {
        flexDirection: 'row',
        alignItems: "center",
        columnGap: 2,
    },
    sellall: {
        color: "red",
    },
    carts: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ebebeb",
        marginBottom: 10,
        padding: 20,
        borderRadius: 15,
    },
    ordertxt: {
        fontSize: 12,
        color: "green"
    },
    ordhead: {
        marginTop: 10,
    },
    ordplaced: {
        marginTop: 4,
        fontSize: 12,
        color: "#858585"
    },
    cartprices: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
    },
    prices: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
    },
    faqhead: {
        paddingHorizontal: 14,
        fontWeight: 500,
        fontSize: 18,
    },
    faqs: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingVertical: 20,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ebebeb"
    },
    faqmargin: {
        marginTop: 12,
    },
    itemname: {
        fontSize: 14,
    },

})