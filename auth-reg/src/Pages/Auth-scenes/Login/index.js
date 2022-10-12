import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../../redux/reducers/userReducer';




const Login = () => {
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
    const loginUser = (e) => {
        e.preventDefault()
        dispatch(signIn(userData))
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input onChange={(e) => getUserData('email', e.target.value)} placeholder='email' type="email" />
                <input onChange={(e) => getUserData('pass', e.target.value)} placeholder='pass' type={type} />
                <button>Login</button>
                <label htmlFor="password">
                    <input onChange={changeType} type="checkbox" />показать пароль
                </label>
            </form>
            <input type="email" />

        </div>
    );
};

export default Login;