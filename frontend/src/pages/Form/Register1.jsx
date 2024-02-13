import React, { useState} from 'react'
import './Register.css'
import { useLocation, useNavigate } from 'react-router-dom'
import PasswordCheck from './passwordFeatures/PasswordCheck';
import AuthService from './auth/AuthService';

export default function Register1() {
  const location = useLocation();
  const navigate = useNavigate();
  const prevForm = location.state.form;

  const [isValidLength, setIsValidLength] = useState(false);
  const [hasUpperAndLower, setHasUpperAndLower] = useState(false);
  const [hasAnumber, setHasAnumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: prevForm.name,
    email: prevForm.email,
    staffId: prevForm.staffId,
    password: '',
    password1: ''
  });

  const handleChange = (e) => {
    const input = e.target.value
    const { name, value } = e.target
    const checker = new PasswordCheck();
    checker.add(input)

    setIsValidLength(checker.isEightOrMore());
    setHasUpperAndLower(checker.containsUpperAndLower());
    setHasAnumber(checker.constainsAnumber());
    setSpecialChar(checker.containsAspecialChar());
    // setPasswordMatch(checker.isMatch(input))

    if (isValidLength && hasAnumber && hasUpperAndLower && specialChar){
      setForm((prev) => ({
        ...prev,
        [name]: value
      }))
    }

    // checking to see if password match
    if (name === 'password1'){
      setPasswordMatch(value === form.password)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (isValidLength && hasAnumber && hasUpperAndLower && specialChar) {
      const dataJson = AuthService(form)

      if (dataJson) {
        navigate("/")
      } else navigate("/login")
    }
  }

  return (
    <form className="form">
        <h1>Create a password</h1>
        <input name='password' type='password' placeholder='create a password' className='Input-R1' required onChange={handleChange} />
        <input name='password1' type='password' placeholder='confirm password' className='Input-R1' />
        <ul className='password-Check'>
            <li className={isValidLength ? 'pass-text': 'wrong-text'}>Password must be at least 8 characters</li>
            <li className={hasUpperAndLower ? 'pass-text': 'wrong-text'}>Password must contain an uppercase a lowercase letter</li>
            <li className={hasAnumber ? 'pass-text' : 'wrong-text'}>Password must contain a number</li>
            <li className={specialChar ? 'pass-text' : 'wrong-text'}>Must contain a special case character e.g(@.$.#.%...)</li>
            <li className={passwordMatch ? 'pass-text' : 'wrong-text'}>Passwords must match</li>
        </ul>
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </form>
  )
}
