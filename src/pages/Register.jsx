import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import defaultRegisterValues from '../ustils/defaultRegisterValues'
import useAuthentication from '../hooks/useAuthentication'

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
    <form onSubmit={handleSubmit(submit)}>
        <h1>Create a new Users</h1>
        <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' {...register('firstName')} />
        </div>

        <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' {...register('lastName')}/>
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' {...register('email')}/>
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' {...register('password')}/>
        </div>

        <div>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id='phone' {...register('phone')} />
        </div>

        <button>Register</button>
    </form>
  )
}

export default Register