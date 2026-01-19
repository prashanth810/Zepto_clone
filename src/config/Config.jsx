import { Platform } from "react-native";

export const BASE_URL = Platform.OS === 'android'
    ? `https://pickles-ukal.onrender.com`
    : `https://pickles-ukal.onrender.com`;