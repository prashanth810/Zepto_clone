import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'; // Native vector icons
import { useNavigation } from '@react-navigation/native';

const Profilesetting = () => {
    const [formdata, setFormdata] = useState({
        name: "",
        mobile: "",
        email: "",
    });

    const navigation = useNavigation();

    const handleChange = (key, value) => {
        setFormdata({ ...formdata, [key]: value });
    };

    const formvalidate = formdata.name || formdata.mobile || formdata.email;

    const handlesubmit = () => {
        if (!formvalidate) {
            Alert.alert("All Field * required !!");
        }
        else {
            Alert.alert("Form Submitted", `Name: ${formdata.name}\nMobile: ${formdata.mobile}\nEmail: ${formdata.email}`);
        }
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}
            style={{
                marginBottom: 65,
            }}>
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                {/* Custom Header */}
                <View style={{
                    paddingVertical: 18,
                    paddingHorizontal: 18,
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: '#ddd',
                    elevation: 2 // shadow for Android
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="chevron-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: '700', marginRight: 24 }}>
                        Profile
                    </Text>
                </View>
            </View>

            <View style={styles.form}>
                <View style={styles.inpview}>
                    <Text style={styles.promise}> Name * </Text>
                    <TextInput placeholder='prashanth' style={styles.textinputs}
                        placeholderTextColor={"#4e856a"}
                        value={formdata.name}
                        onChangeText={(value) => handleChange("name", value)}
                    />
                </View>

                <View style={styles.inpview}>
                    <Text style={styles.promise}> Mobile Number * </Text>
                    <TextInput placeholder='8106124493' style={styles.textinputs}
                        placeholderTextColor={"#4e856a"}
                        keyboardType="numeric"
                        maxLength={10}
                        value={formdata.mobile}
                        onChangeText={(value) => {
                            // Keep only digits
                            const numericValue = value.replace(/[^0-9]/g, '');
                            handleChange("mobile", numericValue);
                        }}
                    />
                </View>

                <View style={styles.inpview}>
                    <Text style={styles.promise}> Email Address * </Text>
                    <TextInput placeholder='abcd@gmail.com' style={styles.textinputs}
                        placeholderTextColor={"#4e856a"}
                        keyboardType='email'
                        value={formdata.email}
                        onChangeText={(value) => handleChange("email", value)}
                    />
                    <Text style={styles.promise}> We are promise not to spam email. </Text>
                </View>

                <View>
                    <TouchableOpacity style={[styles.submitbtn,
                    { backgroundColor: formvalidate ? "#a3d6be" : "#ccc" }
                    ]} onPress={handlesubmit} disabled={!formvalidate}>
                        <Text style={styles.submittxt}> Submit </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.deleteaccsession}>
                    <Text style={styles.deleteacc}> Delete Account </Text>
                    <Text style={styles.declaratation}> Delecting your account will remove all your orders, wallet ammount and any active referals </Text>
                </View>

            </View>

        </ScrollView>
    )
}

export default Profilesetting

const styles = StyleSheet.create({
    form: {
        padding: 20,
    },
    inpview: {
        marginTop: 25,
    },
    textinputs: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#b4d6c6',
        color: "black",
        fontSize: 12,
        fontWeight: 500,
        borderRadius: 8,
        marginTop: 6,
    },
    promise: {
        marginTop: 4,
        fontSize: 12,
        color: "gray"
    },
    submitbtn: {
        width: "100%",
        alignItems: "center",
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 20,
    },
    submittxt: {
        fontWeight: 600,
    },
    deleteaccsession: {
        borderTopWidth: 1,
        borderTopColor: 'gray',
        marginTop: 50,
    },
    deleteacc: {
        marginTop: 20,
        color: '#de0202',
        fontSize: 16,
        fontWeight: 500,
    },
    declaratation: {
        marginTop: 8,
        lineHeight: 20,
    },
})