import React from "react";
import HomeScreen from "../screens/HomeScreen";

interface PublicRootProps {
  children: React.ReactElement;
}

const PublicRoot: React.FC<PublicRootProps> = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? <HomeScreen /> : children;
};

export default PublicRoot;