import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    addresses: [
        {
            type: "Home",
            addressLine: "123 Main Street",
            flatNumber: "A-203",
            city: "Hyderabad",
            pincode: "500081"
        },
    ],
};

const AddressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        addAddress: (state, action) => {
            // Push the new address object into the addresses array
            state.addresses.push({
                id: Date.now(), // optional unique 
                type: action.payload.type,
                addressLine: action.payload.addressLine,
                flatNumber: action.payload.flatNumber,
                city: action.payload.city,
                pincode: action.payload.pincode,
            });
        },
        removeaddress: (state, action) => {
            state.addresses = state.addresses.filter((item, i) => {
                return item.id !== action.payload;
            })
        },

        // optional: clear all
        clearAddresses: (state) => {
            state.addresses = [];
        }
    },
    extraReducers: (builder) => {
        // Async thunks can go here
    }
});

export const { addAddress, clearAddresses, removeaddress } = AddressSlice.actions;

export default AddressSlice.reducer;
