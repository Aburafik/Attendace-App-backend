import axios from 'axios'

const AuthService = async(form) => {
    const response = await axios.post('/api/admin/register', form)
    const data = await response.data.json()

    if (response.status === 200 &&  data.token){
        localStorage.setItem('token', data.token)
        return true
    } else {
        throw new Error("Attempt fail, Please try again")
    }
}

export default AuthService