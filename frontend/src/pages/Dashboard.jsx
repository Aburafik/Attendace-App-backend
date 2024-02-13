import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    if(!token) {
        navigate('/login')
    } else {
        return (
            <div>Dashboard</div>
        )
    }
 
}

export default Dashboard