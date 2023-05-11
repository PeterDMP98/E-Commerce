import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import defaultRegisterValues from '../ustils/defaultRegisterValues'
import useAuthentication from '../hooks/useAuthentication'
import '../components/register/styles/register.css'

const Register = () => {

    const navigate = useNavigate()

    const {createNewUser}=  useAuthentication()

    const {register, handleSubmit, reset} = useForm()

    const submit = data =>{
        createNewUser(data)
        reset(defaultRegisterValues)
        navigate('/')
    }

  return (
    <form className='register' onSubmit={handleSubmit(submit)}>

        <h2 className='register__title'>Create a new Users</h2>

        
        <div className='register__email register__info'>
            <label className='register__info-label' htmlFor="email">Email</label>
            <input className='register__info-value' type="email" id='email' {...register('email')}/>
        </div>

        <div className='register__firsName register__info'>
            <label className='register__info-label' htmlFor="firstName">First Name</label>
            <input className='register__info-value' type="text" id='firstName' {...register('firstName')} />
        </div>

        <div className='register__lastName register__info'>
            <label className='register__info-label' htmlFor="lastName">Last Name</label>
            <input className='register__info-value' type="text" id='lastName' {...register('lastName')}/>
        </div>

        <div className='register__password register__info'>
            <label className='register__info-label' htmlFor="password">Password</label>
            <input className='register__info-value' type="password" id='password' {...register('password')}/>
        </div>

        <div className='register__phone register__info'>
            <label className='register__info-label' htmlFor="phone">Phone {`(10 Characters)`} </label>
            <input className='register__info-value' type="tel" id='phone' {...register('phone')} />
        </div>

        <button className='register__btn'>Register</button>

        <p className='register__verify-login'>Already have an account? <Link to={'/login'}>Log in</Link></p>
    </form>
  )
}

export default Register