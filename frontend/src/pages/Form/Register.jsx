import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/submit')
    }
  return (
    <div className="form">
        <form>
            <input name='name' type='text' placeholder='Enter your name' className='Input' />
            <input name='email' type='email' placeholder='Enter your email' className='Input' />
            <input name='staffId' type='text' placeholder='Enter your staff Id' className='Input' />
            {/* <input name='sex' type='checkbox' placeholder='Date of Birth' /> */}
            <button className='next-btn' onClick={handleClick}>Next</button>
        </form>
    </div>
  )
}

export default Register