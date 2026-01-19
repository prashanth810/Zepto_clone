import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Thunder from 'react-native-vector-icons/AntDesign';
import Stars from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux';
import { getallproductlist } from '../../../redux/feactures/product page/ProductSlice';
import { FlatList } from 'react-native-gesture-handler';
import Bill from 'react-native-vector-icons/Ionicons'

const Refundviewdetails = () => {
    const route = useRoute();
    const { refundsdata } = route.params;
    const dispatch = useDispatch();

    const { productlist, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getallproductlist());
    }, [])

    const navigation = useNavigation();
    const refunds = refundsdata.item;

    console.log(productlist, 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'); // check if it's an array


    const renderitems = ({ item }) => {
        return (
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", marginTop: 8, }}>
                <View style={{ flexDirection: "row", columnGap: 10, }}>
                    <Image source={{ uri: item.image }} style={styles.imgstyles} />
                    <View>
                        <Text style={{ fontSize: 12, color: "gray" }}>{item.name}</Text>
                        <Text style={{ fontSize: 10, color: "gray" }}>{item.price}</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontWeight: 800, fontSize: 12, }}>{item.halfkg}</Text>
                    <Text style={{ fontSize: 12, }}>{item.halfkg}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={{ backgroundColor: "#e4eff2" }}>
            <View style={styles.refunds}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>  <FontAwesome name='angle-left' size={22} color="#000" /> </Text>
                </TouchableOpacity>
                <Text style={styles.refundhead}>Order #{refunds.id}</Text>
            </View>

            <View style={{ paddingHorizontal: 15, backgroundColor: 'white', paddingBottom: 20, }}>
                <View style={styles.ratingstars}>
                    <Text style={{ color: "#7a7979", fontSize: 13 }}> You rated : </Text>
                    <View style={styles.stars}>
                        <Text> <Stars name='star' size={15} color={"#ff2424"} /> </Text>
                        <Text> <Stars name='star' size={15} color={"#ff2424"} /> </Text>
                        <Text> <Stars name='star' size={15} color={"#ff2424"} /> </Text>
                        <Text> <Stars name='star' size={15} color={"#ff2424"} /> </Text>
                        <Text> <Stars name='star' size={15} color={"#ff2424"} /> </Text>
                    </View>
                </View>

                <View style={[styles.delpara, { borderBottomWidth: 1, borderColor: "#d9d9d9", paddingBottom: 20, }]}>
                    <View style={[styles.delpara, { columnGap: 4 }]}>
                        <Text style={{ backgroundColor: "#00B6881A", color: "#00B688", padding: 8, borderRadius: 6, }}><AntDesign name='check' size={15} /></Text>
                        <Text style={styles.delhead}> Delivered </Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}>
                        <Text style={{ height: 30, borderLeftWidth: 1, borderColor: "#d9d9d9" }} />
                        <View>
                            <Text style={{ fontSize: 10, textAlign: "center" }}>Arrived in </Text>
                            <Text style={{ fontSize: 9, backgroundColor: "#f8c4ff", paddingHorizontal: 6, paddingVertical: 3, borderRadius: 5, marginTop: 2 }}> <Thunder name='thunderbolt' size={11} /> 7 MINS </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.listofprods}>
                    <FlatList
                        data={productlist.slice(0, 2)}
                        keyExtractor={(item, i) => i.toString()}
                        renderItem={({ item }) => renderitems({ item })}
                        ItemSeparatorComponent={() => (
                            <View style={{ height: 10, }} />
                        )}
                    />
                </View>
            </View>

            <View style={{ backgroundColor: "white", marginVertical: 10, paddingBottom: 20, paddingHorizontal: 15, }}>
                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 15, columnGap: 2 }}>
                    <Text style={{ marginTop: 6 }}> <Bill name='chatbox-ellipses-outline' size={20} />  </Text>
                    <Text style={{ fontSize: 15, fontWeight: 500 }}>Bill Summary </Text>
                </View>
            </View>

        </View>
    );
};

export default Refundviewdetails;

const styles = StyleSheet.create({
    refunds: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#d6d6d6",
        paddingVertical: 18,
        paddingHorizontal: 16,
        elevation: 5,
        backgroundColor: "#fff"
    },
    refundhead: {
        fontSize: 11,
        fontWeight: 500,
    },
    stars: {
        flexDirection: "row",
    },
    ratingstars: {
        flexDirection: "row",
        alignItems: 'center',
        columnGap: 5,
        backgroundColor: "#f7f7f7",
        marginVertical: 15,
        borderWidth: 1,
        borderColor: "#d6d6d6",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    delpara: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    delhead: {
        fontSize: 18,
        fontWeight: 500,
    },
    listofprods: {
        marginTop: 15,
    },
    imgstyles: {
        width: 35,
        height: 35,
        borderRadius: 10,
    },
});        