import React, { useEffect } from 'react'
import usePurchases from '../hooks/usePurchases'
import ProductPurchase from '../components/purchases/ProductPurchase'
import '../components/purchases/styles/purchases.css'

const Purchases = () => {

    const {pruchases, getAllProductPurchased, buyThisCart} = usePurchases()

    useEffect(() => {
        getAllProductPurchased()
    }, [])

  return (
    <div className='purchases'>
        <h2 className='purchases__title'>My Purchases</h2>

        <div className='purchases__container'>
            {
                pruchases?.map(prodPurchase => (
                    <ProductPurchase
                    key={prodPurchase.id}
                    prodPurchase={prodPurchase}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Purchases