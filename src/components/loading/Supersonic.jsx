import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Supersonic = () => {
    return (
        <ScrollView style={{ backgroundColor: "#131114", marginHorizontal: 14, borderRadius: 15, paddingVertical: 23, paddingHorizontal: 12, }}>
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
                <View style={{ width: "65%" }}>
                    <Text style={{ fontSize: 18, color: 'white', paddingBottom: 2, fontWeight: 500 }}>Supersonic</Text>
                    <Text style={{ fontSize: 13, color: 'gray', letterSpacing: 6, paddingBottom: 2 }}> SALE </Text>
                    <Text style={{ fontSize: 13, color: 'gray', paddingBottom: 1 }}> UP TO 85% OFF</Text>
                    <Text style={{ fontSize: 13, color: 'gray', paddingHorizontal: 1, }}> additional <Text style={{ color: "white" }}> Flat 20% Off </Text> on 1000+ With code <Text style={{ color: "white" }}> SONIC20 </Text> </Text>

                    <View>
                        <TouchableOpacity style={{ backgroundColor: "white", paddingVertical: 6, paddingHorizontal: 10, width: "60%", marginTop: 13, borderRadius: 10 }}>
                            <Text style={{ textAlign: "center", fontWeight: 800, letterSpacing: 1 }}> ORDER NOW </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: "35%" }}>
                    <Image source={{ uri: "https://cdn.mos.cms.futurecdn.net/eL9VSDqr6c6tDC4nDVBPUK-1200-80.jpg" }} width="110" height="100" style={{ borderRadius: 12 }} />
                </View>
            </View>
        </ScrollView>
    )
}

export default Supersonic