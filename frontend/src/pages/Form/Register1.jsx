import React, { useState, useRef } from 'react'
import './Register.css'
import PasswordCheck from './passwordFeatures/PasswordCheck';

export default function Register1({ name, email, staffId }) {
  const [phase1, setPhase1] = useState(false) 
  const [phase2, setPhase2] = useState(false) 
  // const [form, setForm] = useState({
  //   name: name,
  //   email: email,
  //   staffId: staffId,
  //   password: '',
  //   password1: ''
  // });

  const plain = useRef(new PasswordCheck())

  const handleChange = (e) => {
    plain.current.add(e.target.value)
    const eightOrMore = plain.current.isEightOrMore();
    console.log(eightOrMore)
    if(eightOrMore){
      setPhase1(true)
      console.log('characters are 8 or more')
      plain.current.plaintext = [];
    } else {
      setPhase1(false);
    }

    const UpperAndLower = plain.current.containsUpperAndLower()
    if(UpperAndLower){
      setPhase2(true);
    } else {
      setPhase2(false);
    }

  }

  return (
    <form className="form">
        <h1>Create a password</h1>
        <input name='password' type='password' placeholder='create a password' className='Input-R1' required onChange={handleChange} />
        <input name='password1' type='password' placeholder='confirm password' className='Input-R1' required />
        <ul className='password-Check'>
            <li className={phase1 ? 'pass-text': 'wrong-text'}>Password must be at least 8 characters</li>
            <li className={phase2 ? 'pass-text': 'wrong-text'}>Password must contain an uppercase a lowercase letter</li>
            <li className='wrong-text'>Password must contain a number</li>
            <li className='wrong-text'>Must contain a special case character e.g(@.$.#.%...)</li>
        </ul>
        <button className="submit-btn">Submit</button>
    </form>
  )
}
