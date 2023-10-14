import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import useNomineecontext from '../hooks/useNomineecontext';

import useAuthcontext from '../hooks/useAuthContext';
const Otp = () => {
    const [otp,setOtp] = useState()
    const [error,setError] = useState()
    const {user} = useNomineecontext()
    const {dispatch} = useAuthcontext()
    const navigate = useNavigate();

    const handleSubmit = async() => {
        const email = user.email
        const password = user.password
        const register = {email,password,otp}
        const response = await fetch('http://localhost:8000/api/registerUser/',{
            method: 'POST',
            body: JSON.stringify(register),
            headers : {'Content-Type' : 'applicaton/json'}
        })
        const json = response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            dispatch({type: 'LOGIN', payload: user.email})
            navigate('/Nomination')
        }
    }
    return (
        <div className="">
            <center className='otp'>
                <p className="lead fw-bold">Verify</p>
                <Form.Control
                    placeholder="enter otp sent to email"
                    className='w-25 mb-3'
                    onChange={(e) => setOtp(e.target.value)}
                />
                <Button as="input" variant="secondary" onClick={handleSubmit} value='submit' className='w-25 d-block' />
                {error && <div className='error'>{error}</div>}
            </center>

        </div>);
}

export default Otp;