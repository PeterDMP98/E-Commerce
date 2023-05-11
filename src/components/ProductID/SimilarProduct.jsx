import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch';
import CardProduct from '../home/CardProduct';
import './styles/similarProducts.css'

const SimilarProduct = ({ product }) => {

    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product?.categoryId}`
    const [filterProducts, getProductByCategory] = useFetch(url)

    useEffect(() => {
        if (product) {
            getProductByCategory()
        }
    }, [product])

    return (
        <section className='similar__product'>
            <h1 className='similar__title'>Discover similar products</h1>

            <div className='similar__content-product'>
                {
                    filterProducts?.map(prod => {
                        if (product.id !== prod.id) {
                            return (
                                <CardProduct
                                    key={prod.id}
                                    product={prod}
                                />

                            )
                        }
                    })
                }
            </div>
        </section>
    )
}

export default SimilarProduct