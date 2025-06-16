import { Platform } from "react-native";

export const BASE_URL = Platform.OS === 'android'
    ? 'http://192.168.1.5:8040'
    : 'http://localhost:8040';