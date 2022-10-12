import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import PreviewHome from './Pages/Auth-scenes/PreviewHome';
import Home from './Pages/Work-scenes';
import Login from './Pages/Auth-scenes/Login/index';
import Registration from './Pages/Auth-scenes/Registration/index';

const App = () => {
  const { token } = useSelector(state => state.user)
  return token ? (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
    :
    (
      <Routes>
        <Route path='/' element={<PreviewHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    )
};

export default App;