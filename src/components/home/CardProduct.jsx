import React from 'react'
import './styles/cardProducts.css'
import { useNavigate } from 'react-router-dom'
import useCrudCart from '../../hooks/useCrudCart'


const CardProduct = ({ product }) => {

    const navigate = useNavigate()

    const {addProductToCard} = useCrudCart()


    const handleSelectProduct = () => {
        navigate(`/product/${product.id}`)
    }

    const handleBtnClick = e => {
        e.stopPropagation()
        if (localStorage.getItem('token')) {
            const data = {
                quantity: 1,
                productId: product.id
            }
            addProductToCard(data)
        } else {
            navigate('/login')
        }

    }

    
    return (
        <article onClick={handleSelectProduct} className='product'>
            <header className='product__header'>
                <img className='product__img product__img-1' src={product.images[0].url} alt="" />
                <img className='product__img product__img-2' src={product.images[1].url} alt="" />
            </header>

            <div className='product__body'>
                <section className='product__section'>
                    <h4 className='product__subtitle'>{product.brand}</h4>
                    <h3 className='product__title'>{product.title}</h3>
                </section>

                <section className='product__price'>
                    <span className='product__price-label'>Price</span>
                    <span className='product__price-value'>{product.price}</span>
                </section>

                <button onClick={handleBtnClick} className='product__btn'>
                    <i className='bx bx-cart-alt' ></i>
                </button>
            </div>


        </article>
    )
}

export default CardProduct