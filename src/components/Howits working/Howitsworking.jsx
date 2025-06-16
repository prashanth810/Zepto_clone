import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'; // Native vector icons
import idealogo from "../../assets/idea.png";

const Howitsworking = () => {
    const navigation = useNavigation();
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                {/* Custom Header */}
                <View style={{
                    paddingVertical: 16,
                    paddingHorizontal: 14,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: '#ddd',
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="chevron-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: 'center', fontSize: 17, fontWeight: '700', marginRight: 24 }}>
                        How It Work's ?
                    </Text>
                </View>

                {/* Rest of your screen content goes here */}
            </View>

            <View>
                <View>
                    <Image
                        source={idealogo} // Don't wrap in uri!
                        style={{ width: "100%", height: "280", resizeMode: 'contain', marginTop: 10 }}
                    />
                </View>



                <View style={{ paddingTop: 40 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30, marginHorizontal: 14 }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
                        <Text style={{ marginHorizontal: 10, color: '#666', fontWeight: '500' }}>HOW IT WORKS</Text>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
                    </View>


                    <View style={{ marginHorizontal: 14, flexDirection: "column", rowGap: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 12, }}>
                            <View>
                                <View style={{ paddingHorizontal: 4, paddingVertical: 2, borderWidth: 1, borderRadius: 20, borderColor: 'lightgray', backgroundColor: "#c1e6e0" }}>
                                    <Text> 1 </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: "gray" }}> Use the 16 digits code Bipto Card and Pin as recieved on your email id or Phone numer </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 12 }}>
                            <View>
                                <View style={{ paddingHorizontal: 4, paddingVertical: 2, borderWidth: 1, borderRadius: 20, borderColor: 'lightgray', backgroundColor: "#c1e6e0" }}>
                                    <Text> 2 </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: "gray" }}> Use the 16 digits code Bipto Card and Pin as recieved on your email id or Phone numer </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 12 }}>
                            <View>
                                <View style={{ paddingHorizontal: 4, paddingVertical: 2, borderWidth: 1, borderRadius: 20, borderColor: 'lightgray', backgroundColor: "#c1e6e0" }}>
                                    <Text> 3 </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: "gray" }}> Use the 16 digits code Bipto Card and Pin as recieved on your email id or Phone numer </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 12 }}>
                            <View>
                                <View style={{ paddingHorizontal: 4, paddingVertical: 2, borderWidth: 1, borderRadius: 20, borderColor: 'lightgray', backgroundColor: "#c1e6e0" }}>
                                    <Text> 4 </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: "gray" }}> Use the 16 digits code Bipto Card and Pin as recieved on your email id or Phone numer </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 12 }}>
                            <View>
                                <View style={{ paddingHorizontal: 4, paddingVertical: 2, borderWidth: 1, borderRadius: 20, borderColor: 'lightgray', backgroundColor: "#c1e6e0" }}>
                                    <Text> 5 </Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{ color: "gray" }}> Any queries contact to email support@biptonow.com </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Howitsworking;