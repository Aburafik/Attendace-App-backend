import React, { useState, useRef } from 'react'
import './Register.css'
import PasswordCheck from './passwordFeatures/PasswordCheck';

export default function Register1({ name, email, staffId }) {
  // const [password, setPassword] = useState('');
  const [isValidLength, setIsValidLength] = useState(false);
  const [hasUpperAndLower, setHasUpperAndLower] = useState(false);
  const [hasAnumber, setHasAnumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  // const [form, setForm] = useState({
  //   name: name,
  //   email: email,
  //   staffId: staffId,
  //   password: '',
  //   password1: ''
  // });

  const handleChange = (e) => {
    const input = e.target.value

    const checker = new PasswordCheck();
    checker.add(input)

    setIsValidLength(checker.isEightOrMore());
    setHasUpperAndLower(checker.containsUpperAndLower());
    setHasAnumber(checker.constainsAnumber());
    setSpecialChar(checker.containsAspecialChar());
    
  }

  return (
    <form className="form">
        <h1>Create a password</h1>
        <input name='password' type='password' placeholder='create a password' className='Input-R1' required onChange={handleChange} />
        <input name='password1' type='password' placeholder='confirm password' className='Input-R1' required />
        <ul className='password-Check'>
            <li className={isValidLength ? 'pass-text': 'wrong-text'}>Password must be at least 8 characters</li>
            <li className={hasUpperAndLower ? 'pass-text': 'wrong-text'}>Password must contain an uppercase a lowercase letter</li>
            <li className={hasAnumber ? 'pass-text' : 'wrong-text'}>Password must contain a number</li>
            <li className={specialChar ? 'pass-text' : 'wrong-text'}>Must contain a special case character e.g(@.$.#.%...)</li>
        </ul>
        <button className="submit-btn">Submit</button>
    </form>
  )
}
