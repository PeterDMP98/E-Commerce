import axios from "axios"
import getConfigToken from "../ustils/getConfigToken"
import { useDispatch } from "react-redux"
import { getAllProductCartThunk } from "../store/slices/cart.slice"
import { useState } from "react"

const usePurchases = () => {

    const dispatch = useDispatch()

    const [pruchases, setpruchases] = useState()

    const url =`https://e-commerce-api-v2.academlo.tech/api/v1/purchases`

    const getAllProductPurchased = () => {
        axios.get(url, getConfigToken())
        .then(res => setpruchases(res.data))
        .catch(err => console.log(err))
    }

    const buyThisCart= () => {
        axios.post(url,{}, getConfigToken())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductCartThunk())

        })
        .catch(err => console.log(err))
    }
  
    return {pruchases, getAllProductPurchased, buyThisCart }
}

export default usePurchases