import { useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct';
import '../components/home/styles/home.css'

import FilterHome from '../components/home/FilterHome';

import { useRef, useState } from 'react';

const Home = () => {

  const { productsGlobal } = useSelector(state => state)

  const [openCloseFilter, setopenCloseFilter] = useState()

  const [inputValue, setinputValue] = useState("")

  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  const inputChange = useRef()

  const handleChangeInput = () => {
    setinputValue(inputChange.current.value.toLowerCase().trim());
  }

  const hanldeFilterOpen = () => {
    setopenCloseFilter("close")
  }

  const productFilter = productsGlobal
    ?.filter(prod => prod.title.toLowerCase().includes(inputValue))
    .filter(prod => {

      const from = +fromTo.from
      const to = +fromTo.to
      const price = +prod.price
      
      if (from && to) {
        return from <= price && price <= to
      }
      if (from && !to) {
        return from <= price
      }
      if (!from && to) {
        return price <= to
      }
      if (!from && !to) {

        return true
      }
    })
    
  return (

    <div className='home'>

      <div className='home__input'>

        <input className='home__search-input' ref={inputChange} onChange={handleChangeInput} type="text" placeholder='What are you looking for?' />

      </div>

      <div className='search__filter-content-btn'>
        <button onClick={hanldeFilterOpen} className='search__filter__btn'>
          <i className='bx bx-filter-alt'></i>
          <span> Filters</span>
        </button>
      </div>

      <div className='home__product'>

        <div className='home__content-filter'>
          <FilterHome
            openCloseFilter={openCloseFilter}
            setopenCloseFilter={setopenCloseFilter}
            setFromTo={setFromTo}
          />
        </div>

        <div className='home__product-content'>

          {
            productFilter?.map(prod => (
              <CardProduct
                key={prod.id}
                product={prod}
              />
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Home