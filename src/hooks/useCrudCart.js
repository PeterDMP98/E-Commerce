import axios from "axios"
import getConfigToken from "../ustils/getConfigToken"
import { getAllProductsThunk } from "../store/slices/product.slice"
import { useDispatch } from "react-redux"
import { getAllProductCartThunk } from "../store/slices/cart.slice"


const useCrudCart = () => {
    const dispatch = useDispatch()

    const addProductToCard = data => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart`
        axios.post(url, data, getConfigToken())
            .then(res => {
                dispatch(getAllProductsThunk())
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)

                if (err?.response?.data?.error === 'Product already added to cart') {
                    //ejecutar el udate
                }
            })
    }

    const deleteProductFromCard = id => {
        const urldelte = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
        axios.delete(urldelte, getConfigToken())
            .then(res => {
                dispatch(getAllProductCartThunk())
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    const updateProductInCard = (id, data) => {
        const urlupdate = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${id}`
        axios.put(urlupdate, data, getConfigToken())
            .then(res => {
                dispatch(getAllProductCartThunk())
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }


    return { addProductToCard, deleteProductFromCard, updateProductInCard }

}

export default useCrudCart