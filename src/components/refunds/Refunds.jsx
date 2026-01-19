import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Headersforall from '../headers for all/Headersforall';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Refunds = () => {
    const completed = [
        { id: 1, time: "03/03/2025 at 03:46pm", orderid: "20006MHJ12", price: 15.66, status: "Completed" },
        { id: 2, time: "02/03/2025 at 03:46pm", orderid: "20006MHJ12", price: 25.66, status: "Pending" },
        { id: 3, time: "01/03/2025 at 03:46pm", orderid: "20006MHJ12", price: 35.66, status: "Rejected" },
    ];

    const width = Dimensions.get("window").width;
    const navigation = useNavigation();

    return (
        <View>
            {/* headers for all  */}
            <Headersforall name={"Refund"} />

            <View style={styles.main}>
                <Text style={styles.completedtxt}> Completed </Text>

                <View style={styles.supporater}>

                    <FlatList
                        data={completed}
                        keyExtractor={(item, i) => i.toString()}
                        ItemSeparatorComponent={() => {
                            return (<View style={{ height: 12 }} />)
                        }}
                        renderItem={({ item, i }) => {
                            return (
                                <View style={{
                                    backgroundColor: "#fcf5fc", paddingHorizontal: 14, paddingVertical: 20, borderRadius: 10, borderWidth: 1, borderColor: "#e3e3e3"
                                }}>
                                    <View key={i} style={styles.complitedlist}>
                                        <Text style={styles.heades}> {item.time} </Text>

                                        <View style={{ backgroundColor: item.status === "Completed" ? "#00B6881A" : item.status === "Pending" ? "#D0AB001A" : "#FF2D331A", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 5, }}>
                                            <Text style={{ color: item.status === "Completed" ? "#00B688" : item.status === "Pending" ? "#D0AB00" : "#FF2D33", fontSize: 12, }}>{item.status}</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: 'center', columnGap: 20, }}>
                                        <Text style={styles.orderid}> Order Id : {item.orderid}</Text>

                                        <View style={{ flexDirection: "row", alignItems: 'center', position: "relative" }}>
                                            <Text style={{ height: 5, width: 5, position: "absolute", bottom: 5, backgroundColor: "gray", borderRadius: 10, }}></Text>
                                            <Text style={styles.orderid}>  {item.price}</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15, }}>
                                        <TouchableOpacity style={{ borderWidth: 1, paddingVertical: 2, paddingHorizontal: 3, borderRadius: 7, borderColor: '#A700FF' }} onPress={() => navigation.navigate("viewrefunddetails", { refundsdata: { item } })}>
                                            <Text style={{ fontSize: 10, color: "#A700FF" }}>View Refund details</Text>
                                        </TouchableOpacity>

                                        <Text></Text>
                                    </View>

                                </View>
                            )
                        }}
                    />

                </View>

            </View>

        </View>
    )
}

export default Refunds;
const styles = StyleSheet.create({
    main: {
        marginVertical: 20,
        marginHorizontal: 10,
        backgroundColor: "white",
    },
    completedtxt: {
        fontSize: 17,
        fontWeight: 500,
        marginBottom: 13,
    },
    complitedlist: {
        flexDirection: "row",
        columnGap: 20,
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    supporater: {
        rowGap: 20,
    },
    heades: {
        fontSize: 12,
        color: '#7a7a7a',
    },
    orderid: {
        fontSize: 12,
        color: '#7a7a7a',
        marginTop: 14,
        marginLeft: 3,
    },
})