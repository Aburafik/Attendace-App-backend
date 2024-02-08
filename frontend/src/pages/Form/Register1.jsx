import React, { useState, useRef } from 'react'
import './Register.css'
import { set } from 'mongoose';

export default function Register1({ name, email, staffId }) {
  const [color, setColorstate] = useState(false)
  const [form, setForm] = useState({
    name: name,
    email: email,
    staffId: staffId,
    password: '',
    password1: ''
  });

  class TextCheck {
    constructor() {
      this.plaintext = [];
      this.isEightOrMore = this.isEightOrMore.bind(this);
    }

    isEightOrMore() {
      const len = this.plaintext.length - 1;
      if (this.plaintext[len].length >= 8){
        console.log(this.plaintext[len])
        return true
      }
      return false
    }
  }  
  
  const plain = useRef(new TextCheck())

  const handleChange = (e) => {
    if(e.target.value === '') {
      const foundAt = plain.current.plaintext.indexOf(e.target.value)
      plain.current.plaintext.splice(foundAt, 1)
    } else {
      plain.current.plaintext.push(e.target.value)
    }
    const bull = plain.current.isEightOrMore();
    console.log(bull)
    if(bull){
      setColorstate(true)
      console.log('characters are 8 or more')
      plain.current.plaintext = [];
    } else {
      setColorstate(false);
    }
  }

  return (
    <form className="form">
        <h1>Create a password</h1>
        <input name='password' type='password' placeholder='create a password' className='Input-R1' required onChange={handleChange} />
        <input name='password1' type='password' placeholder='confirm password' className='Input-R1' required />
        <ul className='password-Check'>
            <li className={color ? 'pass-text': 'wrong-text'}>Password must be at least 8 characters</li>
            <li className='wrong-text'>Password must contain an uppercase a lowercase letter</li>
            <li className='wrong-text'>Password must contain a number</li>
            <li className='wrong-text'>Must contain a special case character e.g(@.$.#.%...)</li>
        </ul>
        <button className="submit-btn">Submit</button>
    </form>
  )
}
