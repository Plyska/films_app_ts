import React from "react";
import LoginScreen from "../screens/LoginScreen";

interface PrivateRootProps {
  children: React.ReactElement;
}

const PrivateRoot: React.FC<PrivateRootProps> = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <LoginScreen />;
  } else {
    return children
  }
};

export default PrivateRoot;
