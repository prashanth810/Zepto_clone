import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Alltransactions = () => {
    const [transactions, setTransactions] = useState("All");
    const navigation = useNavigation();

    const data = [
        {
            id: 1,
            type: "debited",
            title: "Free Cash Expired",
            date: "24 Dec 2024, 10:52AM",
            amount: "-₹75",
            amountStyle: { color: "red" }
        },
        {
            id: 2,
            type: "created",
            title: "Free Cash - valid for next order",
            date: "24 Dec 2024, 10:52AM",
            amount: "+₹75",
            amountStyle: { color: "green", fontWeight: "700" }
        },
        {
            id: 3,
            type: "created",
            title: "Referral Bonus",
            date: "10 Jan 2025, 2:15PM",
            amount: "+₹100",
            amountStyle: { color: "green", fontWeight: "700" }
        },
        {
            id: 5,
            type: "debited",
            title: "wellcome bonus",
            date: "01 Feb 2025, 9:00AM",
            amount: "-₹50",
            amountStyle: { color: "red" }
        },
        {
            id: 6,
            type: "created",
            title: "Referral Bonus",
            date: "10 Jan 2025, 2:15PM",
            amount: "+₹100",
            amountStyle: { color: "green", fontWeight: "700" }
        },
        {
            id: 7,
            type: "debited",
            title: "wellcome bonus",
            date: "01 Feb 2025, 9:00AM",
            amount: "-₹50",
            amountStyle: { color: "red" }
        },
        {
            id: 8,
            type: "created",
            title: "Referral Bonus",
            date: "10 Jan 2025, 2:15PM",
            amount: "+₹100",
            amountStyle: { color: "green", fontWeight: "700" }
        }, {
            id: 9,
            type: "debited",
            title: "wellcome bonus",
            date: "01 Feb 2025, 9:00AM",
            amount: "-₹80",
            amountStyle: { color: "red" }
        },
        {
            id: 10,
            type: "created",
            title: "Free Cash bonus",
            date: "01 Feb 2025, 9:00AM",
            amount: "+₹80",
            amountStyle: { color: "green", fontWeight: "700" }
        }
    ];

    const filteredData = transactions === "All"
        ? data
        : data.filter(item => item.type === transactions);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <View style={{ flex: 1, backgroundColor: "#fff" }}>
                    {/* Header */}
                    <View style={{
                        paddingVertical: 16,
                        paddingHorizontal: 14,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderBottomWidth: 0, // 👈 No border
                        elevation: 0,          // 👈 No shadow (Android)
                        shadowColor: 'transparent', // 👈 No shadow (iOS)
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0,
                        shadowRadius: 0,
                    }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Icon name="chevron-back" size={24} color="#000" />
                        </TouchableOpacity>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: '700', marginRight: 24 }}>
                            All Transactions
                        </Text>
                    </View>
                    {/* Filter Buttons */}
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        columnGap: 10,
                        marginHorizontal: 25,
                        paddingBottom: 6
                    }}>
                        {[
                            { label: "All", value: "All" },
                            { label: "Credited", value: "created" },
                            { label: "Debited", value: "debited" }
                        ].map(({ label, value }) => (
                            <TouchableOpacity
                                key={value}
                                style={{
                                    backgroundColor: transactions === value ? "#f1f1f1" : "transparent",
                                    borderBottomWidth: transactions === value ? 3 : 0,
                                    borderColor: "#38635e",
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                    borderRadius: 8,
                                    paddingBottom: 6,
                                }}
                                onPress={() => setTransactions(value)}>
                                <Text>{label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Transactions List */}
                <View style={{ marginVertical: 20, borderWidth: 1, borderColor: "lightgray", marginHorizontal: 12, borderRadius: 8 }}>
                    {filteredData.map(item => (
                        <View key={item.id} style={{
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "space-between",
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            borderBottomWidth: 1,
                            borderColor: "lightgray",
                            borderStyle: "dashed"
                        }}>
                            <View style={{ paddingBottom: 10 }}>
                                <Text style={{ fontWeight: "600" }}>{item.title}</Text>
                                <Text style={{ fontSize: 12 }}>{item.date}</Text>
                            </View>
                            <View>
                                <Text style={item.amountStyle}>{item.amount}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default Alltransactions;
