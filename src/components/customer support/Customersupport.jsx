import { View, Text, Animated, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'

const Customersupport = () => {
    const translateX = useRef(new Animated.Value(-300)).current;
    const translateY = useRef(new Animated.Value(0)).current;
    const fadein = useRef(new Animated.Value(0)).current;

    const animeconfig = {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
    }

    const handletransulate = () => {
        Animated.timing(translateX, {
            ...animeconfig,
        }).start();
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handletransulate();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handlesyncanimate = () => {
        Animated.sequence(
            [
                Animated.timing(translateY, {
                    toValue: -50,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
                // Animated.timing(fadein, {
                //     toValue: 1,
                //     duration: 300,
                //     useNativeDriver: false,
                // }),
            ]
        ).start();
    }


    return (
        <View style={styles.cont}>
            <Animated.Text style={[styles.text, { transform: [{ translateX }, { translateY }] }]}>Customersupport</Animated.Text>

            <TouchableOpacity onPress={handlesyncanimate}>
                <Text> jump </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
        fontSize: 16,
    }
})
export default Customersupport