import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'; // Native vector icons

const Faqs = () => {
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
                        Customer Support & FAQs
                    </Text>
                </View>

                {/* Rest of your screen content goes here */}
            </View>
            <Text>Alltransactions</Text>
        </ScrollView>
    )
}

export default Faqs