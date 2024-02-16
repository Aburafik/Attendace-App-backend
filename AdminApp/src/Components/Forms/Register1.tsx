import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import PasswordCheck from '../Features/PasswordConfig';
import axios from 'axios';

const Register1: React.FC = () => {
    const inputRefPassword1 = useRef<HTMLInputElement>(null);
    const inputRefPassword = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const [isValidLength, setIsValidLength] = useState(false);
    const [hasUpperAndLower, setHasUpperAndLower] = useState(false);
    const [hasAnumber, setHasAnumber] = useState(false);
    const [specialChar, setSpecialChar] = useState(false);

    const [form, setForm] = useState({
        password1: '',
        password: ''
    });

    const valid: boolean = isValidLength;
    const upperAndLower: boolean = hasUpperAndLower;
    const Anumber: boolean = hasAnumber;
    const char: boolean = specialChar;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        if (name === 'password1' && value !== form.password) {
            console.log('password does not match');
            alert('password does not match');
        } else {
            setForm((prev) => ({
                ...prev,
                [name]: value
            }));

            const checker = new PasswordCheck();
            checker.add(value);

            setIsValidLength(checker.isEightOrMore());
            setHasUpperAndLower(checker.containsUpperAndLower());
            setHasAnumber(checker.constainsAnumber());
            setSpecialChar(checker.containsAspecialChar());
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const response = await axios.post('https://localhost:3000/api/admin/user/register', form);
        const data = response.data;

        setForm(data);
        // navigate('/'); // Uncomment this if you intend to navigate after form submission
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Create a password</h1>
            <input ref={inputRefPassword1} name='password1' type='password' placeholder='create a password' className='Input-R1' required onChange={handleChange} />
            <input ref={inputRefPassword} name='password' type='password' placeholder='confirm password' className='Input-R1' required onChange={handleChange} />
            <ul className='password-Check'>
                <li className={valid ? 'pass-text' : 'wrong-text'}>Password must be at least 8 characters</li>
                <li className={upperAndLower ? 'pass-text' : 'wrong-text'}>Password must contain an uppercase and a lowercase letter</li>
                <li className={Anumber ? 'pass-text' : 'wrong-text'}>Password must contain a number</li>
                <li className={char ? 'pass-text' : 'wrong-text'}>Must contain a special case character e.g(@.$.#.%...)
                </li>
            </ul>
            <button className="submit-btn" type='submit'>Submit</button>
        </form>
    );
};

export default Register1;