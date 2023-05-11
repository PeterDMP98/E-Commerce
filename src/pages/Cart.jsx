import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductInCart from '../components/cart/ProductInCart'
import { getAllProductCartThunk } from '../store/slices/cart.slice'
import usePurchases from '../hooks/usePurchases'
import '../components/cart/styles/cart.css'


const Cart = () => {

    const { cartGlobal } = useSelector(state => state)

    const { pruchases, getAllProductPurchased, buyThisCart } = usePurchases()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProductCartThunk())
    }, [])

    const totalPriceCart = cartGlobal?.reduce((acc, cv) => acc + cv.quantity * cv.product.price, 0)

    const hanldePurchase = () => {
        buyThisCart()
    }

    return (
        <div className='cart'>

            <div className='cart__content'>
                {
                    cartGlobal?.map(prodCart => (
                        <ProductInCart
                            key={prodCart.id}
                            prodCart={prodCart}
                        />
                    ))
                }
            </div>

            <footer className='cart__footer'>

                <div className='car-footer__content-total'>

                    <span className='cart__total-product-label'>Total:</span>

                    <h3 className='cart__total-product-value'>$ {totalPriceCart}</h3>
                </div>



                <button className='cart__buy-btn' onClick={hanldePurchase} >Buy now</button>
            </footer>

        </div>
    )
}

export default Cart