import './styles/productInCart.css'
import useCrudCart from '../../hooks/useCrudCart'
import { useState } from 'react'

const ProductInCart = ({ prodCart }) => {

    const { deleteProductFromCard } = useCrudCart()

    const handleDeleteCart = () => {
        deleteProductFromCard(prodCart.id)
    }

    console.log(prodCart);
    return (
        <div className='product__cart'>

            <header className='product-cart__header'>

                <div className='product-cart__herder-content-img'>

                    <img className='product-cart__header-img' src={prodCart.product.images[0].url} alt="" />

                </div>

                <h3 className='product-cart__title'>{prodCart.product.title}</h3>


                <button className='product-cart__delete-product' onClick={handleDeleteCart}>

                    <i className='bx bx-trash'></i>

                </button>

            </header>


            <section className='product-cart__buy'>


                <p className='product-cart__value'>{prodCart.quantity}</p>


                <p className='product-cart__total-price'>
                    <span className='product-cart__label'>Subtotal:</span>
                    <span className='produdct-cart__value'>$ {prodCart.product.price * prodCart.quantity}</span>
                </p>



            </section>





        </div>
    )
}

export default ProductInCart