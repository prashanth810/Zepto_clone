import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Arrowleft from "react-native-vector-icons/FontAwesome";

const Buy = () => {
    return (
        <View style={{ margin: 10, }}>
            <View style={{ backgroundColor: "#3667a8", padding: 10, borderTopLeftRadius: 18, borderTopRightRadius: 18, paddingVertical: 8 }}>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "center", columnGap: 10 }}>
                    <TouchableOpacity style={{ borderRightWidth: 1, borderColor: "gray" }}>
                        <Text style={{ fontSize: 10, paddingRight: 3, color: "white" }}> Toys </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ borderRightWidth: 1, borderColor: "gray" }}>
                        <Text style={{ fontSize: 10, paddingRight: 3, color: "white" }}> Electronics </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ borderRightWidth: 1, borderColor: "gray" }}>
                        <Text style={{ fontSize: 10, paddingRight: 3, color: "white" }}> Home Needs </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ borderRightWidth: 1, borderColor: "gray" }}>
                        <Text style={{ fontSize: 10, paddingRight: 3, color: "white" }}> Fashoin </Text>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Text style={{ fontSize: 10, color: "white" }}> Kitchen </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ backgroundColor: '#3979cc', flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 14, borderBottomLeftRadius: 18, borderBottomRightRadius: 18, position: "relative" }}>
                <View>
                    <Text style={{ color: "white" }}> deals starting At </Text>
                    <Text style={{ color: "white", fontSize: 40, fontWeight: 800 }}> ₹59 </Text>
                </View>
                <View>
                    <Image source={{ uri: "https://cdn.mos.cms.futurecdn.net/eL9VSDqr6c6tDC4nDVBPUK-1200-80.jpg" }} width="110" height="100" style={{ borderRadius: 12, }} />
                </View>
            </View>

            <View>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", position: "absolute", bottom: -9, left: "35%", backgroundColor: "#451401", paddingVertical: 3, paddingHorizontal: 5, borderRadius: 20 }}>
                    <Text style={{ color: "white", fontSize: 12 }}> See inside </Text>
                    <Text style={{ color: "white" }}> <Arrowleft name='angle-right' size='14' /> </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Buy