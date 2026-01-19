import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Headersforall = ({ name }) => {
    return (
        <View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                paddingVertical: 18,
                elevation: 5,
                backgroundColor: '#fff',
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name='angle-left' size={22} color="#000" style={{ fontWeight: 800, }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: '600', }}> {name} </Text>
                <Text>  </Text>
            </View>
        </View>
    )
}

export default Headersforall

const styles = StyleSheet.create({})