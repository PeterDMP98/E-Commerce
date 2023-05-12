import './styles/header.css'
import { Link } from 'react-router-dom'

const Header = ({ userMe }) => {



  let singinOff = ""

  if (!localStorage.getItem('token')) {
    singinOff = "singinOff"
  } else {
    singinOff = ""
  }

  return (
    <header className='header'>
      <h1 className='header__logo'><Link to='/'>e-commerce</Link></h1>

      <Link to={'/login'} className={`header__login-user ${singinOff}`}>User: {userMe?.firstName} {userMe?.lastName}</Link> <div></div>



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