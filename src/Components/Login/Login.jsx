import React, { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'

const Login =()=>{
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        dispatch(login({
            name,
            email,
            password,
            loggedIn:true
        }))
    }
    return (
        <div className='login'>
            <form className='login__form' onSubmit={(e)=>handleSubmit(e)}>
                <h1 className='text__letter'>Login Here &#128513; </h1>
                <input type='name' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type='email' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type='password' placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type='submit' className='submit__btn'>Submit</button>
            </form>
        </div>
    )
}

export default Login