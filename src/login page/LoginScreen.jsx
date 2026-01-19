import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Animated,
    Alert,
    ScrollView, // ✅ Added ScrollView explicitly instead of Animated.ScrollView
} from 'react-native';
import useKeyboardOffsetHeight from './Keyboardoffsetheight/Keyboardoffsetheight';
import Mail from 'react-native-vector-icons/AntDesign';
import Eye from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import { BASE_URL } from '../config/Config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [step, setStep] = useState(1);
    const [message, setMessage] = useState("");
    const [token, setToken] = useState("");
    const [messageType, setMessageType] = useState("info");
    const [loading, setLoading] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(0);
    const otpRefs = [useRef(), useRef(), useRef(), useRef()];

    const navigation = useNavigation();
    const animatedValue = useRef(new Animated.Value(0)).current;
    const Keyboardoffsetheight = useKeyboardOffsetHeight();

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: Keyboardoffsetheight === 0 ? 0 : -Keyboardoffsetheight * 0.48,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [Keyboardoffsetheight]);

    useEffect(() => {
        let timer;
        if (secondsLeft > 0) {
            timer = setInterval(() => {
                setSecondsLeft((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [secondsLeft]);

    const showMessage = (msg, type = "info") => {
        setMessage(msg);
        setMessageType(type);
    };

    const handleSendOtp = async () => {
        setLoading(true);
        try {
            const res = await axios.post("https://pickles-ukal.onrender.com/api/mail/send-otp", { email });
            showMessage(res.data.message, "success");
            setStep(2);
            setSecondsLeft(60); // start 1-minute countdown
        } catch (err) {
            showMessage(err.response?.data?.message || "Failed to send OTP", "error");
        }
        setLoading(false);
    };

    const handleVerifyOtp = async () => {
        const otpCode = otp.join("");
        if (otpCode.length !== 4) return showMessage("Enter all 4 digits", "error");
        if (secondsLeft <= 0) return showMessage("OTP expired. Please resend.", "error");

        setLoading(true);
        try {
            const res = await axios.post("https://pickles-ukal.onrender.com/api/mail/verify-otp", {
                email,
                otp: otpCode,
            });
            console.log(res, 'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
            await AsyncStorage.setItem("token", res.data.token);
            await AsyncStorage.setItem("username", res.data.data.name);
            await AsyncStorage.setItem("userId", res.data.data.userId);
            setToken(res.data.token); // Set token to state if needed

            navigation.navigate("bottomnavigator");
            showMessage("✅ OTP verified & token saved!", "success");
        }
        catch (err) {
            showMessage(err.response?.data?.message || "OTP verification failed", "error");
        }
        setLoading(false);
    };

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];

        if (value === "") {
            newOtp[index] = "";
            setOtp(newOtp);
            if (index > 0) otpRefs[index - 1].current.focus(); // 👈 Move back on delete
            return;
        }

        if (!/^[0-9]+$/.test(value)) return;

        // If multiple digits are pasted (e.g., full OTP)
        if (value.length > 1) {
            const digits = value.slice(0, 4).split('');
            digits.forEach((digit, i) => {
                newOtp[i] = digit;
            });
            setOtp(newOtp);
            if (digits.length === 4) otpRefs[3].current.blur();
            return;
        }

        newOtp[index] = value;
        setOtp(newOtp);
        if (index < 3) otpRefs[index + 1].current.focus(); // 👈 Move next
    };


    const handleResend = () => {
        setOtp(["", "", "", ""]);
        handleSendOtp();
    };

    return (
        <View style={styles.container}>
            <Animated.View style={{ transform: [{ translateY: animatedValue }] }}>
                <ScrollView contentContainerStyle={styles.subconatiner} keyboardShouldPersistTaps='handled'>
                    <View style={{ paddingBottom: width * 0.10 }}>
                        <Text style={styles.title}>Pickles</Text>
                        <Text style={{ fontSize: width * 0.042, fontWeight: "500", color: "gray" }}> Groceries delivery in </Text>
                        <Text style={{ fontSize: width * 0.038, fontWeight: "500", color: "gray" }}> <Text style={{ fontSize: 24, color: "white" }}>10</Text> minutes </Text>
                    </View>

                    {step === 1 && (
                        <>
                            <View style={styles.inputContainer}>
                                <Text style={styles.country}> <Mail name='mail' size={18} />  </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter email..."
                                    placeholderTextColor="#aaa"
                                    keyboardType="email-address"
                                    value={email}
                                    onChangeText={setEmail} // ✅ Corrected from onChange + e.target
                                />
                            </View>
                            <TouchableOpacity style={styles.sendOtpBtn} onPress={handleSendOtp}>
                                <Text style={styles.sendOtpText}> {loading ? "Sending otp..." : "Send Otp"} </Text>
                            </TouchableOpacity>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <View style={styles.otpContainer}>
                                {otp.map((digit, index) => (
                                    <TextInput
                                        key={index}
                                        ref={otpRefs[index]}
                                        value={digit}
                                        onChangeText={(value) => handleOtpChange(index, value)}
                                        maxLength={index === 0 ? 4 : 1} // Allow pasting on first box
                                        style={[styles.otpInput,]}
                                        keyboardType="number-pad"
                                        selectionColor="#007AFF"
                                    />

                                ))}
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                                <Text> {messageType === "error" ? "Wrong Otp" : ""}</Text>
                                {secondsLeft > 0 ? (
                                    <Text
                                        style={{
                                            marginVertical: 15,
                                            color: "white"
                                        }}
                                    >
                                        {secondsLeft > 0
                                            ? <Text> ⏳<Text style={{
                                                color:
                                                    secondsLeft <= 10
                                                        ? "red"
                                                        : secondsLeft <= 30
                                                            ? "orange"
                                                            : "green",
                                            }}> {secondsLeft}  </Text></Text>
                                            : "❌ OTP expired"}
                                    </Text>

                                ) : (
                                    <TouchableOpacity onPress={handleResend}>
                                        <Text style={styles.resendText}>Resend OTP</Text>
                                    </TouchableOpacity>
                                )}

                            </View>

                            <TouchableOpacity
                                onPress={handleVerifyOtp} // ✅ Changed onClick to onPress
                                disabled={loading || secondsLeft === 0}
                                style={styles.button}
                            >
                                <Text style={styles.buttonText}>{loading ? "Verifying..." : "Verify OTP"}</Text>
                            </TouchableOpacity>
                        </>
                    )}

                    {/* {step === 3 && <Text style={{ color: "green" }}>🎉 OTP verified. You're logged in!</Text>}
                    {message && (
                        <Text style={{ color: messageType === "error" ? "red" : "green", marginTop: 10, textAlign: 'center' }}>{message}</Text>
                    )} */}
                </ScrollView>
            </Animated.View>
        </View>
    );
};

// ✅ Styles kept untouched
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: width * 0.06,
        justifyContent: 'center',
        backgroundColor: '#01053d',
    },
    subconatiner: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: width * 0.12,
        fontWeight: 'bold',
        color: "#fff",
        paddingBottom: width * 0.02,
    },
    inputContainer: {
        position: 'relative',
        flexDirection: "row",
        alignItems: "center",
        marginBottom: height * 0.02,
        paddingVertical: height * 0.006,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        backgroundColor: 'transparent',
        fontSize: width * 0.04,
    },
    input: {
        width: width * 100,
        color: "white",
        fontWeight: "400",
        fontSize: 12,
        paddingHorizontal: 10,
        height: height * 0.05,
    },
    country: {
        color: "white",
        borderRightWidth: 1,
        borderRightColor: "gray",
        paddingHorizontal: 6
    },
    sendOtpBtn: {
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 14,
        backgroundColor: '#007AFF',
        borderRadius: 30,
        alignItems: "center",
    },
    sendOtpText: {
        color: '#fff',
        fontSize: width * 0.045,
        fontWeight: "500",
        letterSpacing: 1,
    },
    resendText: {
        color: '#007AFF',
        textAlign: 'center',
        marginVertical: height * 0.02,
    },
    button: {
        height: height * 0.06,
        backgroundColor: '#007AFF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.01,
    },
    buttonText: {
        color: '#fff',
        fontSize: width * 0.045,
        fontWeight: 'bold',
    },
    otpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 30,
        marginTop: height * 0.02,
    },
    otpInput: {
        width: width * 0.12,
        height: height * 0.06,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: width * 0.05,
        backgroundColor: 'transparent',
        color: "white",
    },
});

export default LoginScreen;
