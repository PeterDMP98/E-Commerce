import axios from "axios"
import getConfigToken from "../ustils/getConfigToken"
import { useState } from "react"

const useAuthentication = () => {

    const [userMe, setUserMe] = useState()

    const getLoggedUser = () => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/users/me`
        axios.get(url, getConfigToken())
        .then(res => setUserMe(res.data))
        .catch(err => console.log(err))
    }

    const createNewUser = data => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/users`
        axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    const loginUser = data => {
        const url =  `https://e-commerce-api-v2.academlo.tech/api/v1/users/login`
        axios.post(url, data)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
            localStorage.removeItem('token')
        })
    }



    return {createNewUser, loginUser, getLoggedUser, userMe}
}

export default useAuthentication