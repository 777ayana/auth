import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../../redux/reducers/userReducer';
import { removeToken } from './../../LocalStorage/index';

const Home = () => {
    const dispatch = useDispatch9
    const { email } = useSelector(state => state.user)
    const logOut = () => {
        removeToken()
        dispatch(setToken(null))
    }
    return (
        <div>
            <div style={{ display: 'flex', justyfyContent: 'flex-end' }}>
                <h2>email</h2>
                <button onClick={logOut}>log out</button>

            </div>

        </div>
    );
};

export default Home;