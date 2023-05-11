import { Link} from 'react-router-dom'
import '../components/login/styles/login.css'
import useAuthentication from '../hooks/useAuthentication'


const Login = ({ userMe }) => {

    const {loginUser} = useAuthentication()

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const data = { email, password };
        loginUser(data)
    }

    return (
        <div className='login'>

            {
                userMe
                    ? <div className='login__my-user'>
                        <Link to={'/'}> <i className='bx bxs-user-check'></i></Link>
                       
                        <div className='login__content-user'>
                            <p className='login__name'>{userMe.firstName} {userMe.lastName}</p>
                            <p className='Login__email'>{userMe.email}</p>
                        </div>

                    </div>

                    : <div className='login__content'>

                        <p className='login__indication'>Welcome! Enter your email and password to continue</p>

                        <div className='login__ejemplo'>
                            <h4 className='login__ejemplo-title'>Test data</h4>

                            <div className='login__ejemplo-user'>
                                <p className='ejemplos'><i className='bx bx-envelope'></i> <span >john@gmail.com</span></p>
                                <p className='ejemplos'><i className='bx bx-lock'></i> <span >john1234</span></p>
                            </div>

                        </div>

                        <form className='login__form' onSubmit={handleLogin}>

                            <div className='login__user'>

                                <label htmlFor="email">Email</label>

                                <input className='login__input' type="email" id='email' />

                            </div>

                            <div className='login__user'>

                                <label htmlFor="password">Password</label>

                                <input className='login__input' type="password" id='password' />

                            </div>

                            <button className='login__btn'>Login</button>
                        </form>

                        <p>Don't have an acount? <Link className='login__to-register' to={'/register'}>Sign up</Link></p>
                    </div>
            }



        </div>

    )
}

export default Login