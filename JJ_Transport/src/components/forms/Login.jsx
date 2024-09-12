import React from 'react'
import bmw from "../../assets/bmw.png"

const Login = () => {
  return (
    <div>
      <div className='flex w-full h-full justify-center items-center'>
        <img src={bmw} alt="BMW Car" className='w-[50%] h-[50%]'/>
        <div className='flex-1'>
            <form action="/login" method='post'>
                <h1 className='text-center text-2xl'>Login With JJ</h1>
                <div className=''>
                    <label htmlFor="name">Username</label>
                    <input type="text" name='name' id='name'/>
                </div>
                <div className=''>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email'/>
                </div>
                <div className=''>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password'/>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
