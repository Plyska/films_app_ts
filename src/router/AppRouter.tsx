import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header';

import LoginScreen from '../screens/LoginScreen';
import SigninScreen from '../screens/SigninScreen';
import HomeScreen from '../screens/HomeScreen';

import PublicRoot from '../roots/PublicRoot';
import PrivateRoot from '../roots/PrivateRoot';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/login' element={<LoginScreen />} />
                <Route path='/signin' element={<SigninScreen />} />
                <Route path='/' element={<HomeScreen />} />
                <Route path='*' element={<h1>ІДИ НА ХУЙ</h1>} />
            </Routes>
        </Router>
    )
}

export default AppRouter