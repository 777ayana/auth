import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../../redux/reducers/userReducer';

const Registration = () => {
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        email: '',
        name: '',
        pass: '',
    })
    const getUserData = (type, value) => {
        setUserData({ ...userData, [type]: value })
    }
    const [type, setType] = useState('password')
    const changeType = () => {
        type == 'password' ? setType('text') : setType('password')
    }
    const { isLoading } = useSelector(state => state.user)
    const createUser = (e) => {
        e.preventDefault()
        dispatch(signUp(userData))
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={createUser}>
                <input onChange={(e) => getUserData('email', e.target.value)} value={userData.email} placeholder='email' type="text" />
                <input onChange={(e) => getUserData('name', e.target.value)} value={userData.name} placeholder="name" type="text" />
                <input onChange={(e) => getUserData('pass', e.target.value)} value={userData.pass} placeholder="pass" type={type} />
                <button>Regist</button>
            </form>
            <label htmlFor='password'>
                <input onChange={changeType} type='checkbox' />показать пароль
            </label>

        </div>
    );
};

export default Registration;