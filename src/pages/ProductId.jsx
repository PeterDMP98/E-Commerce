import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInfo from '../components/ProductID/ProductIdInfo'
import SlaiderImgs from '../components/ProductID/SlaiderImgs'
import SimilarProduct from '../components/ProductID/SimilarProduct'
import '../components/ProductID/styles/productId.css'

const ProductId = () => {

  const { id } = useParams()

  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`

  const [product, getProductById] = useFetch(url)

  useEffect(() => {
    getProductById()
  }, [id])

  return (
    <div className='product-id'>
      <SlaiderImgs product={product} />
      <ProductIdInfo product={product} />
      <SimilarProduct product={product} />
    </div>
  )
}

export default ProductId