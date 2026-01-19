import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-gesture-handler';
import Veggieslist from "./Veggieslist";
import Supersonic from './Supersonic';
import { useNavigation } from '@react-navigation/native';
import Buyagain from '../buy again/Buyagain';
import Buy from '../buy again/Buy';
import Maxsaving from '../max saving/Maxsaving';
import User from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Landingpage = () => {
    const [status, setStatus] = useState("bepto");
    const [navbar, setNavbar] = useState("All");
    const placeholders = [
        'Search for "food"',
        'Search for "toys"',
        'Search for "fruits"',
        'Search for "drinks"',
    ];
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [token, setToken] = useState("");
    const [popup, setPopup] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        }, 1500); // change every 1.5 seconds

        return () => clearInterval(interval);
    }, []);



    return (
        <ScrollView style={{ flex: 1, marginBottom: 70 }} showsVerticalScrollIndicator={false}>
            <View>
                <View style={{
                    backgroundColor: status === "bepto" ? "#01053d" : "#f0fff1",
                }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "space-between",
                            paddingVertical: 2,
                            paddingHorizontal: 4,
                            backgroundColor: "#f2fff3",
                            marginTop: 10,
                            borderRadius: 50,
                            width: "95%",
                            marginHorizontal: "auto",
                            borderRadius: 30,
                            marginTop: 15,
                            elevation: 10,
                            borderWidth: 1,
                            borderColor: "#f2f2f2",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: "49%",
                                backgroundColor: status === "bepto" ? "#38635e" : "transparent",
                                paddingVertical: 9,
                                borderRadius: 20,
                            }}
                            onPress={() => setStatus("bepto")}>
                            <View>
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontSize: 16,
                                        color: status === "bepto" ? "white" : "#38635e",
                                        fontWeight: 600,
                                    }} > Bepto </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                width: "49%",
                                backgroundColor: status === "supersaver" ? "green" : "transparent",
                                paddingVertical: 8,
                                borderRadius: 20,
                            }}
                            onPress={() => setStatus("supersaver")}
                        >
                            <View>
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontSize: 15,
                                        color: status === "supersaver" ? "white" : "green",
                                        fontWeight: 600,
                                    }}
                                >
                                    Bepto <Text style={{ color: status === "supersaver" ? "#4fff58" : "green" }}> Super saver </Text>
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <ScrollView>
                            <View style={{ flex: 1, backgroundColor: "transparent" }}>
                                {/* Custom Header */}
                                <View style={{
                                    paddingTop: 18,
                                }}>

                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 15, paddingBottom: 8, }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 10 }}>
                                            <View>
                                                <TouchableOpacity onPress={() => { navigation.navigate("profile") }} >
                                                    <Text> <FontAwesome name='user-circle-o' size="36" style={{ color: status === "bepto" ? 'white' : "#38635e", }} /> </Text>
                                                </TouchableOpacity>
                                            </View>

                                            <View>
                                                <Text style={{ color: status === "bepto" ? 'white' : "#38635e", fontSize: 17, fontWeight: 600, }}> Delivery in <Text style={{ color: status === "bepto" ? 'white' : "#38635e", fontSize: 21, fontWeight: 800 }}> 6 Mins </Text> </Text>
                                                <View >
                                                    <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}
                                                        onPress={() => navigation.navigate("addlocation")}>
                                                        <Text style={{ color: status === "bepto" ? 'white' : "#38635e", fontSize: 11 }}>  Home - Sanjeeva Reddy nag...  </Text>
                                                        <Text> <FontAwesome name='angle-down' style={{ color: status === "bepto" ? 'white' : "#38635e", fontSize: 20, fontWeight: 900, }} /> </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>

                                        </View>

                                    </View>
                                </View>
                            </View>
                        </ScrollView>


                        {/* seacrh bar  */}
                        <View style={{ marginHorizontal: 5, marginBottom: 15 }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                    paddingHorizontal: 10,
                                    margin: 10,
                                }}
                            >
                                <AntDesign name="search1" size={20} color="#38635e" style={{ marginRight: 8 }} />
                                <TextInput
                                    placeholder={placeholders[placeholderIndex]}
                                    placeholderTextColor="#38635e"
                                    style={{
                                        flexDirection: "row",
                                        color: "#38635e",
                                        fontWeight: '500',
                                    }}
                                />
                            </View>
                        </View>

                    </View>
                    {status === "bepto" ? (
                        <View>
                            {/* navigation  */}
                            <View style={{ marginHorizontal: 15, marginBottom: 5 }}>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: 'space-around',
                                }}>
                                    {/* All */}
                                    <TouchableOpacity onPress={() => setNavbar("All")}>
                                        <View style={{
                                            alignItems: 'center',
                                            borderBottomWidth: navbar === "All" ? 2 : 0,
                                            borderBottomColor: '#38635e',
                                            paddingBottom: 6,
                                        }}>
                                            <Feather size={19} name='shopping-bag' color="white" />
                                            <Text style={{ color: "white", fontSize: 12, marginTop: 8 }}>All</Text>
                                        </View>
                                    </TouchableOpacity>

                                    {/* Cafe */}
                                    <TouchableOpacity onPress={() => setNavbar("Cafe")}>
                                        <View style={{
                                            alignItems: 'center',
                                            borderBottomWidth: navbar === "Cafe" ? 2 : 0,
                                            borderBottomColor: '#38635e',
                                            paddingBottom: 6,
                                        }}>
                                            <Ionicons size={19} name='cafe-outline' color="white" />
                                            <Text style={{ color: "white", fontSize: 12, marginTop: 8 }}>Cafe</Text>
                                        </View>
                                    </TouchableOpacity>

                                    {/* Pharmacy */}
                                    <TouchableOpacity onPress={() => setNavbar("Pharmacy")}>
                                        <View style={{
                                            alignItems: 'center',
                                            borderBottomWidth: navbar === "Pharmacy" ? 2 : 0,
                                            borderBottomColor: '#38635e',
                                            paddingBottom: 6,
                                        }}>
                                            <Fontisto size={19} name='tablets' color="white" />
                                            <Text style={{ color: "white", fontSize: 12, marginTop: 8 }}>Pharmacy</Text>
                                        </View>
                                    </TouchableOpacity>

                                    {/* Fresh */}
                                    <TouchableOpacity onPress={() => setNavbar("Fresh")}>
                                        <View style={{
                                            alignItems: 'center',
                                            borderBottomWidth: navbar === "Fresh" ? 2 : 0,
                                            borderBottomColor: '#38635e',
                                            paddingBottom: 6,
                                        }}>
                                            <FontAwesome5 size={19} name='apple-alt' color="white" />
                                            <Text style={{ color: "white", fontSize: 12, marginTop: 8 }}>Fresh</Text>
                                        </View>
                                    </TouchableOpacity>

                                    {/* Electronics */}
                                    <TouchableOpacity onPress={() => setNavbar("Electronics")}>
                                        <View style={{
                                            alignItems: 'center',
                                            borderBottomWidth: navbar === "Electronics" ? 2 : 0,
                                            borderBottomColor: '#38635e',
                                            paddingBottom: 6,
                                        }}>
                                            <Ionicons size={19} name='headset-outline' color="white" />
                                            <Text style={{ color: "white", fontSize: 12, marginTop: 8 }}>Electronics</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ) : (
                        ""
                    )}
                </View>

                <View>
                    {/* valid offers  */}
                    <View>
                        <View style={{ backgroundColor: "#38635e", paddingVertical: 7, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, }}>
                            <Text style={{ color: "white", textAlign: "center", fontSize: 12 }}> Offer valid only today! </Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Veggieslist />
                    <Maxsaving />
                    <Supersonic />
                    <Buy />
                    <Buyagain />
                </View>

            </View >

        </ScrollView>

    );
};

export default Landingpage;
