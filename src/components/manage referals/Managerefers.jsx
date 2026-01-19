import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const Managerefers = () => {
    const translateX = useRef(new Animated.Value(-500)).current;

    const animationConfig = {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
    };

    const animateX = () => {
        Animated.timing(translateX, {
            ...animationConfig,
        }).start();
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            animateX();
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.manager, { transform: [{ translateX }] }]}>Managerefers</Animated.Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    manager: {
        fontSize: 16,
    }
})


export default Managerefers

