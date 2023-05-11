import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/product.slice'
import { useDispatch } from 'react-redux'
import Header from './components/shared/Header'
import ProductId from './pages/ProductId'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import useAuthentication from './hooks/useAuthentication'

function App() {

  const { loginUser, getLoggedUser, userMe } = useAuthentication()

  console.log(userMe);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
    getLoggedUser()
  }, [])
  
  return (
    <div className='app'>
      <Header userMe={userMe}/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductId />} />
        
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login userMe={userMe}/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/purchases' element={<Purchases/>}/>
      </Routes>

      <footer className='app__footer'>
        <p className='app__copy'><i className='bx bx-copyright'></i> DMPROGRAM 2022</p>
        <div className='social'>
        <i className='bx bxl-instagram'></i>
        <i className='bx bxl-linkedin'></i>
        <i className='bx bxl-youtube' ></i>
        </div>
      </footer>
    </div>
  )
}

export default App
