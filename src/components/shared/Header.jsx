import './styles/header.css'
import { Link } from 'react-router-dom'

const Header = ({userMe}) => {
  return (
    <header className='header'>
      <h1 className='header__logo'><Link to='/'>e-commerce</Link></h1>
      {
        userMe ? <p className='header__login-user'>User: {userMe.firstName} {userMe.lastName}</p> : <div></div>
      }
      

      <nav className='header__nav'>

        <ul className='header__list'>

          <li className='header__item'><Link className='header__link' to='/login'><i className='bx bx-user' ></i></Link></li>
          <li className='header__item'><Link className='header__link' to='/purchases'><i className='bx bx-box'></i> </Link> </li>
          <li className='header__item'><Link className='header__link' to='/cart'><i className='bx bx-cart-alt' ></i></Link> </li>

        </ul>

      </nav>

    </header>
  )
}

export default Header