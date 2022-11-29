import React from 'react';
import './App.css';
import Header from "./components/Header";
import AppRouter from './router/AppRouter';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
