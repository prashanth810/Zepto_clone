import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { Veggies } from '../../database/Databse';

const Veggieslist = () => {
    const firstItem = Veggies.slice(0, 5);
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = screenWidth / 3;
    const navigation = useNavigation();

    const renderCartItems = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('singleproduct', { product: item })}>
                <View style={{
                    width: itemWidth,
                    padding: 10,
                    backgroundColor: "white",
                    marginHorizontal: 5,
                    borderRadius: 11,
                    marginTop: 10,
                }}>
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: 100, height: 80, borderRadius: 8 }}
                        resizeMode="cover"
                    />

                    <View>
                        <View style={{
                            backgroundColor: "lightgray",
                            width: 50,
                            flexDirection: "row",
                            alignItems: "center",
                            paddingBottom: 4,
                            paddingHorizontal: 5,
                            borderRadius: 10,
                            marginTop: 2
                        }}>
                            <Text style={{ color: 'black', marginTop: 5, fontSize: 8, }}>
                                <SimpleLineIcons name='fire' size={10} /> {item.delivertime} Mins
                            </Text>
                        </View>

                        <Text style={{ color: 'black', marginTop: 5, fontSize: 11, fontWeight: '500' }}>{item.title}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 8, paddingVertical: 4 }}>
                            <Text style={{ color: 'black', fontSize: 14, fontWeight: '500' }}>
                                ₹{item.price}
                            </Text>
                            <Text style={{ textDecorationLine: "line-through", fontSize: 12, color: "gray", paddingTop: 2 }}>
                                ₹{item.originalprice}
                            </Text>
                        </View>

                        <Text style={{ fontSize: 12, marginTop: 3 }}>
                            {item.weight < 1000 ? `${item.weight} mg` : `${(item.weight / 1000).toFixed(2)} kg`}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ backgroundColor: "#ebf7fa", paddingBottom: 10 }}>
            <Text style={{ color: "white", fontSize: 36, textAlign: "center" }}> SALE IS LIVE </Text>

            <FlatList
                keyExtractor={(item) => item.id?.toString()}
                data={firstItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderCartItems}
            />
        </View>
    );
};

export default Veggieslist;
