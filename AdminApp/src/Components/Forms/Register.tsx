import React from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import Register1 from './Register1'

const Register = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
            name: '',
            email: '',
            staffId: ''
        })
    
    const handleClick = () => {
        navigate('/auth-pass')
    }

    const handleChange = (e: any): void => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div className="form">
            <form>
                <input name='name' type='text' placeholder='Enter your name' className='Input' onChange={handleChange}/>
                <input name='email' type='email' placeholder='Enter your email' className='Input' onChange={handleChange}/>
                <input name='staffId' type='text' placeholder='Enter your staff Id' className='Input' onChange={handleChange}/>
                <button className='next-btn' onClick={handleClick}>Next</button>
            </form>
            {/* <Register1 {...form} /> */}
        </div>
      )
}

export default Register