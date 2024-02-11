import React from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Register1 from './Register1'

const Register = () => {
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/pass-auth')
    }
    return (
        <div className="form">
            <form>
                <input name='name' type='text' placeholder='Enter your name' className='Input' />
                <input name='email' type='email' placeholder='Enter your email' className='Input' />
                <input name='staffId' type='text' placeholder='Enter your staff Id' className='Input' />
                <button className='next-btn' onClick={handleClick}>Next</button>
            </form>
        </div>
      )
}

export default Register