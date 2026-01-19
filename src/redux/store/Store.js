import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from '../feactures/product page/ProductSlice';
import LoginSlice from '../feactures/login page/LoginSlice';
import AddressSlice from '../feactures/address slice/AddressSlice';

const Store = configureStore({
    reducer: {
        products: ProductSlice,
        login: LoginSlice,
        newaddres: AddressSlice
    }
})

export default Store;