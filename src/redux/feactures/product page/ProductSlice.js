import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getallproducts } from '../../apis/Api';

// get all products list 
export const getallproductlist = createAsyncThunk("products/fetchallproducts", async (_, thunkAPI) => {
    try {
        const response = await getallproducts();
        return response.data.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error?.response?.data || "FAiled to fetch products");
    }
})

const initialState = {
    loading: false,
    error: null,
    productlist: [],
};

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getallproductlist.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getallproductlist.fulfilled, (state, action) => {
                state.loading = false;
                state.productlist = action.payload;
                console.log(state.productlist, 'sssssssssssssssssssssssssssssssssss')
            })
            .addCase(getallproductlist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch products";
            })
    }
})

export default ProductSlice.reducer;