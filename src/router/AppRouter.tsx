import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginScreen from '../screens/LoginScreen';
import SigninScreen from '../screens/SigninScreen';
import HomeScreen from '../screens/HomeScreen';

import PublicRoot from '../roots/PublicRoot';
import PrivateRoot from '../roots/PrivateRoot';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<PublicRoot><LoginScreen /></PublicRoot>} />
                <Route path='/signin' element={<PublicRoot><SigninScreen /></PublicRoot>} />
                <Route path='/' element={<PrivateRoot><HomeScreen /></PrivateRoot>} />
            </Routes>
        </Router>
    )
}

export default AppRouter