import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getallusers } from "../../apis/Api";


const BASE_URL = "https://pickles-ukal.onrender.com"; // Replace with your actual API

export const authUser = createAsyncThunk(
    "auth/authUser",
    async ({ data, currentstate }, { rejectWithValue }) => {
        try {
            const endpoint = currentstate === "login" ? "/api/user/login" : "/api/user/register";
            const response = await axios.post(`${BASE_URL}${endpoint}`, data);

            if (response.data.success) {
                const { token, data: userData } = response.data;

                if (currentstate === "login") {
                    // Save to AsyncStorage
                    await AsyncStorage.setItem("token", token);
                    await AsyncStorage.setItem("username", userData.name);
                    await AsyncStorage.setItem("userId", userData.userId);
                }

                return { token, user: response.data.data, currentstate };
            } else {
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getalluserslist = createAsyncThunk('auth/fetchallusers', async (_, thunkAPI) => {
    try {
        const response = await getallusers();
        return response.data.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error?.response?.data || "Failed to fetch users details");
    }
})


const LoginSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        error: null,
        user: null,
        token: null,
        users: [],
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            AsyncStorage.clear(); // Clear storage on logout
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(authUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(authUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // get all users list 
            .addCase(getalluserslist.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getalluserslist.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getalluserslist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch user details";
            })
    },
});

export const { logout } = LoginSlice.actions;
export default LoginSlice.reducer;
