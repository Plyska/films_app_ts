import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";

import LoginScreen from "../screens/LoginScreen";
import SigninScreen from "../screens/SigninScreen";
import HomeScreen from "../screens/HomeScreen";

import Typography from "@mui/material/Typography";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="*"
          element={
            <Typography variant="h2" align="center" sx={{ color: "#fff" }}>
              This page does not exist
            </Typography>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
