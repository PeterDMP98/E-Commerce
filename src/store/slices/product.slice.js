import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
    name: "product",
    initialState: null,
    reducers: {
        setProductsGlobal: (state, action) => action.payload
    }
})

export const {setProductsGlobal} = productSlice.actions

export default productSlice.reducer

export const getAllProductsThunk = (url = `https://e-commerce-api-v2.academlo.tech/api/v1/products`) => dispatch =>{
    axios.get(url)
    .then(res => dispatch(setProductsGlobal(res.data)))
    .catch(err => console.log(err))

}