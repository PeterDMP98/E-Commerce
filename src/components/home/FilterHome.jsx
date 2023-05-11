import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/filterHome.css'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { getAllProductsThunk } from '../../store/slices/product.slice'

const FilterHome = ({ setopenCloseFilter, openCloseFilter, setFromTo }) => {

    const urlCategory = `https://e-commerce-api-v2.academlo.tech/api/v1/categories`
    const [categories, getCategory] = useFetch(urlCategory)
    const { register, handleSubmit, reset } = useForm()

    const submit = data => {
        setFromTo(data)
        reset({
            from: "",
            to: ""
        })
    }

    useEffect(() => {
        getCategory()
    }, [])

    const hanldecloseFilter = () => {
        console.log("click");
        setopenCloseFilter("")
    }

    const dispatch = useDispatch()

    const handleClickCategories = id => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
        dispatch(getAllProductsThunk(url))
    }

    const handleClickAllProduct = () => {
        dispatch(getAllProductsThunk())
    }

    const [displayPrice, setDisplayPrice] = useState()
    const [displayCategory, setDisplayCategory] = useState()

    const hanldeClickPrice = () => {
        if (displayPrice) {
            setDisplayPrice()
        } else {
            setDisplayPrice("openClosePrice")
        }

    }

    const hanldeClickCategory = () => {
        if (displayCategory) {
            setDisplayCategory()
        } else {
            setDisplayCategory("openCloseCategory")
        }
    }


    return (
        <article className={`filter__home ${openCloseFilter}`}>

            <div className='filter__home-container'>

                <div className='filter__home-content-close'>
                    <i onClick={hanldecloseFilter} className='bx bxs-x-square'></i>
                </div>

                <h2 className='filter__title'>Filters</h2>

                <section className='filter__price'>

                    <div className='filter__price-title'>

                        <h3 className='price__title'>Price</h3>

                        <i onClick={hanldeClickPrice} className='bx bxs-chevron-down-circle'></i>
                    </div>

                    <form onSubmit={handleSubmit(submit)} className={`filter__price-from ${displayPrice}`}>

                        <div className='form__price-from'>

                            <label htmlFor="from">From</label>

                            <input type="number" id='from' {...register('from')} />

                        </div>

                        <div className='form__price-to'>

                            <label htmlFor="to">To</label>

                            <input type="number" id='to' {...register('to')} />

                        </div>


                        <button className='price-btn'>Filter Price</button>


                    </form>

                </section>

                <section className='filter__category'>

                    <div className='filter__category-title'>

                        <h3 className='category__title'>Category</h3>

                        <i onClick={hanldeClickCategory} className='bx bxs-chevron-down-circle'></i>

                    </div>

                    <ul className={`filter__category__list ${displayCategory}`}>
                        <li onClick={handleClickAllProduct}>All Products</li>
                        {
                            categories?.map(category => (
                                <li onClick={() => handleClickCategories(category.id)} className='category__item' key={category.id}>{category.name}</li>
                            ))
                        }
                    </ul>

                </section>
            </div>

        </article>
    )
}

export default FilterHome