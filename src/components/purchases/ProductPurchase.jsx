import './styles/productPurchase.css'

const ProductPurchase = ({ prodPurchase }) => {

  return (
    <article className='prod-purchase'>

      <div className='prod__purchase__info'>
        <img className='prod-pruchase__img' src={prodPurchase.product.images[0].url} alt="" />

        <h3 className='prod-pruchase__title' >{prodPurchase.product.title}</h3>
      </div>

      <div className='prod-purchases__buy'>
        <span className='prod-pruchase__quantity'>{prodPurchase.quantity}</span>

        <p className='prod-pruchase__total'>$ {prodPurchase.quantity * prodPurchase.product.price}</p>
      </div>

    </article>
  )
}

export default ProductPurchase