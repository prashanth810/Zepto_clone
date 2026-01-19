import httpClient from "../service/Service"

// login & register screen API

export const regiter = () => {
    return httpClient.post(`/api/user/register`)
}

export const login = () => {
    return httpClient.post(`/api/user/login`);
}

export const getallproducts = () => {
    return httpClient.get(`/api/food/products`);
}

// get all users list 
export const getallusers = () => {
    return httpClient.get(`/api/user/users`);
}