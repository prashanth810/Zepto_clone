import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'; // Native vector icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Addingcarddetails = () => {
    const [carddata, setCarddata] = useState({
        cardnumber: '',
        cardpassword: '',
    });
    const navigation = useNavigation();

    const isCardDataFilled = carddata.cardnumber.length >= 16 && carddata.cardpassword.length >= 6;

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, backgroundColor: "#fff", position: "relative" }}>
                {/* Custom Header */}
                <View style={{
                    paddingVertical: 16,
                    paddingHorizontal: 14,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: '#ddd',
                    elevation: 1,
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="chevron-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: 'center', fontSize: 17, fontWeight: '700', marginRight: 24 }}>
                        Add Gift Card
                    </Text>
                </View>
            </View>


            <View style={{ marginHorizontal: 12, paddingTop: 24 }}>
                <Text> Enter 16 digits card code </Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    marginVertical: 10,
                }}>
                    <TextInput
                        style={{ flex: 1, paddingVertical: 6, color: 'gray' }}
                        placeholder="1234-4567-7845"
                        placeholderTextColor="gray"
                        keyboardType='numeric'
                        maxLength={19} // 16 digits + 3 dashes = 19
                        value={carddata.cardnumber}
                        onChangeText={(text) => {
                            const digitsOnly = text.replace(/\D/g, '');
                            const formatted = digitsOnly.match(/.{1,4}/g)?.join('-') || '';
                            setCarddata({ ...carddata, cardnumber: formatted });
                        }}
                    />

                    <FontAwesome5 name='clipboard-list' size={20} color="#38635e" />
                </View>
            </View>

            <View style={{ marginHorizontal: 12, paddingTop: 10 }}>
                <Text> Enter 6 digits Pin </Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    marginVertical: 10,
                }}>
                    <TextInput
                        style={{ flex: 1, paddingVertical: 6, color: 'gray' }}
                        placeholder="123456"
                        placeholderTextColor="gray"
                        keyboardType='numeric'
                        maxLength={6}

                        value={carddata.cardpassword}
                        onChangeText={(text) => setCarddata({ ...carddata, cardpassword: text })}
                    />
                </View>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, marginHorizontal: 14 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
                <Text style={{ marginHorizontal: 10, color: '#666', fontWeight: '500' }}>HOW IT WORKS</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: '#ccc' }} />
            </View>


            <View style={{ marginHorizontal: 14, flexDirection: "column", rowGap: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 12, }}>
                    <View>
                        <View style={{ paddingHorizontal: 4, paddingVertical: 2, borderWidth: 1, borderRadius: 20, borderColor: 'lightgray' }}>
                            <Text> 1 </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: "gray" }}> Use the 16 digits code Bipto Card and Pin as recieved on your email id or Phone numer </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 12 }}>
                    <View>
                        <View style={{ paddingHorizontal: 4, paddingVertical: 2, borderWidth: 1, borderRadius: 20, borderColor: 'lightgray' }}>
                            <Text> 2 </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: "gray" }}> Use the 16 digits code Bipto Card and Pin as recieved on your email id or Phone numer </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 12 }}>
                    <View>
                        <View style={{ paddingHorizontal: 4, paddingVertical: 2, borderWidth: 1, borderRadius: 20, borderColor: 'lightgray' }}>
                            <Text> 3 </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: "gray" }}> Use the 16 digits code Bipto Card and Pin as recieved on your email id or Phone numer </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 12 }}>
                    <View>
                        <View style={{ paddingHorizontal: 4, paddingVertical: 2, borderWidth: 1, borderRadius: 20, borderColor: 'lightgray' }}>
                            <Text> 4 </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: "gray" }}> Use the 16 digits code Bipto Card and Pin as recieved on your email id or Phone numer </Text>
                    </View>
                </View>
            </View>

            <View style={{ marginHorizontal: 14, position: "absolute", bottom: -235, width: '93%', }}>
                <View>
                    <Text style={{ fontSize: 11, textAlign: "center", marginBottom: 10, color: "gray" }}>
                        By continuing. You agree to our <Text style={{ color: "red", fontWeight: 500 }}> Terms & Conditions </Text>
                    </Text>
                </View>
                <TouchableOpacity style={{
                    borderWidth: 1,
                    borderColor: isCardDataFilled ? "#38635e" : "lightgray",
                    backgroundColor: isCardDataFilled ? "#38635e" : "lightgray", paddingVertical: 13, borderRadius: 14
                }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}> Add Gift Card </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Addingcarddetails