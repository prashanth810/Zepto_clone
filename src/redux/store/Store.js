import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from '../feactures/product page/ProductSlice';

const Store = configureStore({
    reducer: {
        products: ProductSlice,
    }
})

export default Store;