import React, { useState } from 'react'
import useCrudCart from '../../hooks/useCrudCart'
import './styles/productIdInfo.css'


const ProductIdInfo = ({ product }) => {

    const [quantity, setQuantity] = useState(1)
    const { addProductToCard } = useCrudCart()


    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }

    }

    const handleAddToCard = () => {
        const data = {
            quantity,
            productId: product.id
        }
        addProductToCard(data)
    }

    return (
        <section className='product__info'>

            <div className='product-info__information'>

                <section className='information__content'>

                    <p className='product-info__content-name'>

                        <h3 className='product-info__label-brand'>{product?.brand}</h3>

                        <h2 className='product-info__value-title'>{product?.title}</h2>

                    </p>

                    <p className='product-info__content-price'>

                        <h3 className='product-info__label-price'>Price</h3>

                        <h2 className='product-info__value-price'>{product?.price}</h2>

                    </p>
                </section>


                <section className='information__quantity'>

                    <h3 className='product-info__label-quantity'>Quantity</h3>

                    <div className='product-info__content-btn'>

                        <button className='product-info_btn-minus' onClick={handleMinus}>-</button>

                        <div className='product-info__value-quantity'>{quantity}</div>

                        <button className='product-info__btn-minus' onClick={handlePlus}>+</button>

                    </div>

                </section>

            </div>


            <footer className='product-info__footer'>


                <button className='product-info__add-cart' onClick={handleAddToCard}> Add to cart <i className='bx bx-cart-alt product-info-icono-cart' ></i></button>

                <p className='product-info__description'>{product?.description}</p>

            </footer>

        </section>
    )
}

export default ProductIdInfo