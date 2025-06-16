import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

const offers = [
    {
        id: '1',
        bgTop: '#38635e',
        bgBottom: '#052e29',
        title1: 'Everyday',
        title2: 'Essentials Store',
        image: require('../../assets/veggie.jpg'),
        order: " No Minimum Order Value",
    },
    {
        id: '2',
        bgTop: '#009c36',
        bgBottom: '#004a1a',
        title1: 'Lowest Prices',
        title2: 'No deliver fee *No surge fee',
        image: require('../../assets/veggie.jpg'),
        order: "Minimum Order Value Applicable ",
    },
    {
        id: '3',
        bgTop: '#009c36',
        bgBottom: '#004a1a',
        title1: 'Lowest Prices',
        title2: 'No deliver fee *No surge fee',
        image: require('../../assets/veggie.jpg'),
        order: " Minimum Order Value Applicable ",
    },
    {
        id: '4',
        bgTop: '#0293d1',
        bgBottom: '#002e42',
        title1: 'Sabse Prices',
        title2: 'Sabse Fresh',
        image: require('../../assets/veggie.jpg'),
        order: "Fresh Fruits & Veggies at best prices ",
    },
];

const Wellcome = () => {
    const navigation = useNavigation();

    const renderOfferCard = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('landing')} style={{ marginBottom: 10 }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: item.bgTop,
                    padding: 15,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}
            >
                <View>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>{item.title1}</Text>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: item.title2 === 0 ? 17 : 12,
                            fontWeight: '500',
                            marginVertical: 6,
                        }}
                    >
                        {item.title2}
                    </Text>
                    <View style={{ backgroundColor: 'gray', width: 40, borderRadius: 20, marginTop: 6, paddingVertical: 6 }}>
                        <AntDesign name="arrowright" style={{ color: 'white', fontSize: 20, textAlign: 'center' }} />
                    </View>
                </View>
                <Image source={item.image} style={{ height: 80, width: 80 }} resizeMode="contain" />
            </View>
            <View
                style={{
                    backgroundColor: item.bgBottom,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                }}
            >
                <Text style={{ textAlign: 'center', color: 'white', paddingVertical: 12, fontSize: 12 }}>
                    {item.order}
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 14, paddingTop: 10, paddingBottom: 50 }}>
            {/* Header */}
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: "#fff" }}>
                    {/* Custom Header */}
                    <View style={{
                        paddingVertical: 18,
                    }}>

                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", columnGap: 15, marginHorizontal: 15, }}>
                            <View>
                                <TouchableOpacity onPress={() => { navigation.navigate("profile") }}>
                                    <Text> <FontAwesome name='user-circle-o' size="36" color="#38635e" /> </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ color: '#333', fontSize: 17, fontWeight: 600, }}> Delivery in <Text style={{ color: "#38635e", fontSize: 21, fontWeight: 800 }}> 6 Mins </Text> </Text>
                                <View style={{ color: '#333', flexDirection: "row", alignItems: 'center', justifyContent: "center" }}>
                                    <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}
                                        onPress={() => navigation.navigate("addlocation")}>
                                        <Text>  Home - Sanjeeva Reddy nag...  </Text>
                                        <Text> <FontAwesome name='angle-down' style={{ color: "#38635e", fontSize: 20, fontWeight: 900, }} /> </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* FlatList for Offers */}
            <FlatList
                data={offers}
                keyExtractor={(item) => item.id}
                renderItem={renderOfferCard}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10, paddingTop: 26 }}
            />
        </View>
    );
};

export default Wellcome;
