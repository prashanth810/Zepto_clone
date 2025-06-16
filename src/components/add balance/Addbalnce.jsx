import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'; // Native vector icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // Native vector icons
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Native vector icons
import Ionicons from 'react-native-vector-icons/Ionicons'; // Native vector icons
import AntDesign from 'react-native-vector-icons/AntDesign'; // Native vector icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Native vector icons
import { useNavigation } from '@react-navigation/native';

const Addbalnce = () => {
    const [ammount, setAmmount] = useState(100);
    const [selectedAmount, setSelectedAmount] = useState(null);

    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                {/* Custom Header */}
                <View style={{
                    paddingVertical: 16,
                    paddingHorizontal: 14,
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: '#ddd',
                    elevation: 2 // shadow for Android
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="chevron-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: '700', marginRight: 24 }}>
                        Bipto Cash
                    </Text>
                </View>

                {/* Rest of your screen content goes here */}
            </View>

            <View style={{ marginHorizontal: 14, paddingTop: 10 }}>
                <View style={{ backgroundColor: "#38635e", flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingVertical: 28, paddingHorizontal: 14, borderRadius: 10 }}>
                    <View>
                        <Text style={{ color: "#82c2ba", fontSize: 16 }}> Available Balance </Text>
                        <Text style={{ color: "white", fontSize: 19, marginTop: 4, fontFamily: 'Poppins-Regular', fontWeight: 700 }}> ₹100.00 </Text>
                    </View>
                    <View>
                        <FontAwesome5 name='coins' style={{ fontSize: 50, color: "gold" }} />
                    </View>
                </View>
            </View>

            <View style={{ marginHorizontal: 35, paddingVertical: 20, }}>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'col', alignItems: 'center' }}>
                        <Text> <Ionicons name="flash" size={22} color="#38635e" /> </Text>
                        <Text style={{ fontSize: 13, marginTop: 4 }}> Eat & Fast </Text>
                        <Text style={{ fontSize: 13 }}> Payment </Text>
                    </View>
                    <View style={{ flexDirection: 'col', alignItems: 'center' }}>
                        <Text> <FontAwesome5 name="rupee-sign" size={22} color="#38635e" /> </Text>
                        <Text style={{ fontSize: 13, marginTop: 4 }}> Instant </Text>
                        <Text style={{ fontSize: 13 }}> Refunds </Text>
                    </View>
                    <View style={{ flexDirection: 'col', alignItems: 'center' }}>
                        <Text> <MaterialCommunityIcons name="brightness-percent" size={24} color="#38635e" /> </Text>
                        <Text style={{ fontSize: 13, marginTop: 4 }}> Exclusive </Text>
                        <Text style={{ fontSize: 13 }}> Offers </Text>
                    </View>
                </View>
            </View>


            <View style={{ borderWidth: 1, borderColor: "lightgray", marginHorizontal: 14, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 16 }}>
                <View style={{ paddingBottom: 5 }}>
                    <Text style={{ fontWeight: 700, fontSize: 16 }}> Add Money to Bipto Cash </Text>
                </View>
                <View>
                    <Text style={{ color: "gray", fontSize: 12 }}> Enter Ammount </Text>
                </View>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: 'lightgray',
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        paddingVertical: 3,
                        marginTop: 10,
                        backgroundColor: "#f0fcfb",
                    }}>
                        <FontAwesome5 name="rupee-sign" size={20} color="#38635e" style={{ marginHorizontal: 8 }} />
                        <TextInput
                            value={String(ammount)}
                            onChangeText={(text) => setAmmount(text)}
                            keyboardType='numeric'
                            placeholder='100'
                            placeholderTextColor="#38635e"
                            style={{
                                flex: 1,
                                color: 'gray',
                                fontSize: 16,
                                paddingHorizontal: 6,
                                fontWeight: 700,
                            }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginVertical: 15 }}>

                        {[500, 1000, 2000, 5000].map((amount, index) => (
                            <View key={index} style={{ width: '48%', marginBottom: 10, position: 'relative' }}>
                                <TouchableOpacity
                                    style={{
                                        borderWidth: 1,
                                        borderRadius: 12,
                                        borderColor: 'lightgray',
                                        backgroundColor: selectedAmount === amount ? "#edfffd" : "transparent",
                                        paddingHorizontal: 30,
                                        paddingVertical: 20,
                                    }}
                                    onPress={() => setSelectedAmount(amount)}
                                >
                                    <Text style={{ fontSize: 16, fontWeight: "800", textAlign: "center" }}> ₹{amount} </Text>
                                </TouchableOpacity>

                                {amount === 1000 && (
                                    <Text style={{
                                        backgroundColor: "red",
                                        width: '44%',
                                        fontSize: 12,
                                        borderRadius: 4,
                                        paddingBottom: 1,
                                        color: "white",
                                        textAlign: "center",
                                        position: "absolute",
                                        bottom: -6,
                                        left: '30%'
                                    }}>
                                        Popular
                                    </Text>
                                )}
                            </View>
                        ))}
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={{ backgroundColor: "#38635e", paddingVertical: 14, borderRadius: 18, }}>
                        <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: 500, letterSpacing: 1, }}> Add Balance </Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={{ marginHorizontal: 14, marginTop: 14, borderWidth: 1, borderColor: "lightgray", borderRadius: 10, flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <View style={{ flexDirection: "row", alignItems: 'center', paddingVertical: 20 }}>
                    <Text>  <FontAwesome5 name='gifts' size="24" color="#38635e" /> </Text>
                    <Text style={{ fontWeight: 700, fontSize: 16 }}>  Have a Gift Card? </Text>
                </View>

                <View>
                    <TouchableOpacity style={{ backgroundColor: "#edfffd", paddingVertical: 6, paddingHorizontal: 6, borderRadius: 10 }} onPress={() => { navigation.navigate("addcard") }}>
                        <Text style={{ color: "#38635e", fontWeight: 700, fontSize: 13 }}> Add Card </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginHorizontal: 14, marginVertical: 15, borderWidth: 1, paddingVertical: 16, borderColor: "lightgray", borderRadius: 10, }}>
                <View style={{ paddingBottom: 12 }}>
                    <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 800 }}> Recent Transactions </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 6, borderBottomWidth: 1, borderColor: "lightgray", borderStyle: "dashed" }}>
                    <View style={{ paddingBottom: 10 }}>
                        <Text style={{ fontWeight: 600 }}> Free Cash Expired </Text>
                        <Text style={{ fontSize: 12 }}> 24 Dec 2024, 10:52Am </Text>
                    </View>
                    <View>
                        <Text> ₹75 </Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 6, borderBottomWidth: 1, borderColor: "lightgray", borderStyle: "dashed" }}>
                    <View style={{ paddingBottom: 10 }}>
                        <Text style={{ fontWeight: 600 }}> Free Cash - valid for next order </Text>
                        <Text style={{ fontSize: 12 }}> 24 Dec 2024, 10:52Am </Text>
                    </View>
                    <View>
                        <Text style={{ color: "green", fontWeight: 700 }}> +₹75 </Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 6, borderBottomWidth: 1, borderColor: "lightgray", borderStyle: "dashed" }}>
                    <View style={{ paddingBottom: 10 }}>
                        <Text style={{ fontWeight: 600 }}> Placed Ordr #B1654C4M6464 </Text>
                        <Text style={{ fontSize: 12 }}> 24 Dec 2024, 10:52Am </Text>
                    </View>
                    <View>
                        <Text> ₹75 </Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 6, }}>
                    <View style={{ paddingBottom: 10 }}>
                        <Text style={{ fontWeight: 600 }}> Free Cash - valid for next order </Text>
                        <Text style={{ fontSize: 12 }}> 24 Dec 2024, 10:52Am </Text>
                    </View>
                    <View>
                        <Text style={{ color: "green", fontWeight: 700 }}> +₹75 </Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 10, paddingVertical: 6, borderBottomWidth: 1, borderColor: "lightgray", borderStyle: "dashed" }}>
                    <View style={{ paddingBottom: 10 }}>
                        <Text style={{ fontWeight: 600 }}> Placed Ordr #B1654C4M6464 </Text>
                        <Text style={{ fontSize: 12 }}> 24 Dec 2024, 10:52Am </Text>
                    </View>
                    <View>
                        <Text> ₹75 </Text>
                    </View>
                </View>

                <View style={{ marginTop: 24 }}>
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center' }} onPress={() => { navigation.navigate("seealltransactions") }}>
                        <Text style={{ textAlign: "center", color: "#38635e", fontWeight: 700, }}> See All   </Text>
                        <Text> <FontAwesome name='angle-right' style={{ fontWeight: 700, fontSize: 16 }} /> </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <TouchableOpacity style={{ marginHorizontal: 14, marginBottom: 10, borderWidth: 1, borderColor: "lightgray", paddingVertical: 15, borderRadius: 10, flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 10, }} onPress={() => navigation.navigate("howitsworking")}>
                    <View style={{ flexDirection: "row", alignItems: 'center', columnGap: 5 }}>
                        <Text style={{ backgroundColor: 'lightgray', paddingHorizontal: 2, paddingVertical: 3, borderRadius: 20, paddingTop: 5 }}> <Ionicons name='document-text' size="18" /> </Text>
                        <Text style={{ fontWeight: 700 }}> How It Work's ? </Text>
                    </View>
                    <View>
                        <Text> <FontAwesome name='angle-right' style={{ fontWeight: 700, fontSize: 20, color: "#38635e" }} /> </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={{ marginHorizontal: 14, marginBottom: 20, borderWidth: 1, borderColor: "lightgray", paddingVertical: 15, borderRadius: 10, flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 10, }} onPress={() => { navigation.navigate("faqquestions") }}>
                    <View style={{ flexDirection: "row", alignItems: 'center', columnGap: 5 }}>
                        <Text style={{ backgroundColor: 'lightgray', paddingHorizontal: 2, paddingVertical: 3, borderRadius: 20, paddingTop: 5 }}> <AntDesign name='questioncircleo' size="18" /> </Text>
                        <Text style={{ fontWeight: 700 }}> FAQs </Text>
                    </View>
                    <View>
                        <Text> <FontAwesome name='angle-right' style={{ fontWeight: 700, fontSize: 20, color: "#38635e" }} /> </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

export default Addbalnce;
