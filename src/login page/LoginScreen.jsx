import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ToastAndroid,
    Platform,
    Animated,
} from 'react-native';
import useKeyboardOffsetHeight from './Keyboardoffsetheight/Keyboardoffsetheight';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
    const [mobile, setMobile] = useState('');
    const [loading, setLoading] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputs = useRef([]);
    const navigation = useNavigation();

    const showToast = (message) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            console.log('Toast:', message);
        }
    };

    const handleSendOtp = () => {
        if (mobile.length !== 10) {
            showToast('Please enter a valid 10-digit mobile number.');
            return;
        }
        setOtpSent(true);
        showToast(`OTP sent to ${mobile}`);
    };

    const handleResendOtp = () => {
        setOtp(['', '', '', '', '', '']);
        inputs.current[0]?.focus();
        showToast(`OTP resent to ${mobile}`);
    };

    const handleChange = (text, index) => {
        if (/^\d?$/.test(text)) {
            const newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);
            if (text && index < 5) {
                inputs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputs.current[index - 1]?.focus();
        }
    };

    const handleLogin = () => {
        const enteredOtp = otp.join('');
        if (enteredOtp.length !== 6) {
            setLoading(false);
            showToast('Please enter the full 6-digit OTP.');
            return;
        }
        setTimeout(() => {
            setLoading(true);
            navigation.navigate("landing");
        }, 800);
        setLoading(false);
        showToast('Login Successful!');
    };

    const animatedValue = useRef(new Animated.Value(0)).current;
    const Keyboardoffsetheight = useKeyboardOffsetHeight();

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: Keyboardoffsetheight === 0 ? 0 : -Keyboardoffsetheight * 0.25,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [Keyboardoffsetheight]);


    return (
        <View style={styles.container}>
            <Animated.ScrollView bounces={false}
                style={{ transform: [{ translateY: animatedValue }] }}
                contentContainerStyle={styles.subconatiner} keyboardShouldPersistTaps='handled'
            >
                {!otpSent ? (
                    <View>
                        <View style={{ paddingBottom: width * 0.15 }}>
                            <Text style={styles.title}>Bepto</Text>
                            <Text style={{ fontSize: width * 0.048, fontWeight: 500, color: "gray", }}> Groceries delivery in </Text>
                            <Text style={{ fontSize: width * 0.044, fontWeight: 500, color: "gray", }}> <Text style={{ fontSize: 24, color: "white" }}>10</Text> minutes </Text>
                        </View>
                        <View style={[styles.inputContainer,]}>
                            <Text style={styles.country}> +91 </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Mobile Number"
                                placeholderTextColor="#aaa"
                                keyboardType="numeric"
                                maxLength={10}
                                value={mobile}
                                onChangeText={setMobile}
                            />
                        </View>

                        <View>
                            {!otpSent && (
                                <TouchableOpacity style={styles.sendOtpBtn} onPress={handleSendOtp}>
                                    <Text style={styles.sendOtpText}>Send OTP</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                ) : (
                    <View>
                        {otpSent && (
                            <>
                                <View>
                                    <Text style={{ color: "white", fontSize: 20, marginBottom: 20 }}> OTP Sended Register Number </Text>
                                </View>
                                <View style={styles.otpContainer}>
                                    {otp.map((digit, index) => (
                                        <TextInput
                                            key={index}
                                            ref={(ref) => (inputs.current[index] = ref)}
                                            style={[styles.otpInput,
                                            digit !== '' && styles.filledInput,]}
                                            keyboardType="numeric"
                                            maxLength={1}
                                            value={digit}
                                            onChangeText={(text) => handleChange(text, index)}
                                            onKeyPress={(e) => handleKeyPress(e, index)}
                                        />
                                    ))}
                                </View>

                                <TouchableOpacity onPress={handleResendOtp}>
                                    <Text style={styles.resendText}>Resend OTP</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                                    <Text style={styles.buttonText}>{loading ? "Login" : "Loading..."}</Text>
                                </TouchableOpacity>

                            </>
                        )}
                    </View>
                )}


                <View style={{ position: "absolute", bottom: 5, left: width * 0.14 }}>
                    <Text style={{ color: "gray", fontSize: 12, textAlign: "center" }}> By continuing, Yet agree to our </Text>
                    <Text style={{ paddingTop: 4, color: "gray" }}> Terms of Use  &  Privacy Policy </Text>
                </View>

            </Animated.ScrollView>


        </View>
    );
};

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
        // alignItems: 'center',
        // marginBottom: 20,
    },
    title: {
        fontSize: width * 0.14,
        fontWeight: 'bold',
        color: "#fff",
        paddingBottom: width * 0.04,
        // textAlign: 'center',
        // marginBottom: height * 0.05,
    },
    inputContainer: {
        position: 'relative',
        flexDirection: "row",
        alignItems: "center",
        marginBottom: height * 0.03,
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
        fontWeight: 400,
        fontSize: 16,
        paddingHorizontal: 10
    },
    country: {
        color: "white",
        borderRightWidth: 1,
        borderRightColor: "gray",
        paddingHorizontal: 6
    },
    sendOtpBtn: {
        paddingHorizontal: 10,
        paddingVertical: 14,
        backgroundColor: '#007AFF',
        borderRadius: 30,
        alignItems: "center",
    },
    sendOtpText: {
        color: '#fff',
        fontSize: width * 0.045,
        fontWeight: 500,
        letterSpacing: 1,
    },
    resendText: {
        color: '#007AFF',
        textAlign: 'right',
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
        justifyContent: 'space-between',
        marginTop: height * 0.02,
    },
    otpInput: {
        width: width * 0.12,
        height: height * 0.06,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 30,
        textAlign: 'center',
        fontSize: width * 0.05,
        backgroundColor: 'transparent',
        color: "white",
    },
    filledInput: {
        backgroundColor: '#a0e8af', // green background for filled input
        borderColor: 'green',
        color: "black",
    },
});

export default LoginScreen;
