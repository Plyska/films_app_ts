import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginScreen from '../screens/LoginScreen';
import SigninScreen from '../screens/SigninScreen';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginScreen />} />
                <Route path='/signin' element={<SigninScreen />} />
            </Routes>
        </Router>
    )
}

export default AppRouter