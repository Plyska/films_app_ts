import React from 'react';
import './App.css';
import Header from "./components/Header";
import AppRouter from './router/AppRouter';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true
    }
  }
})

const App: React.FC = () => {
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Header />
        <AppRouter />
      </QueryClientProvider>
    </div>
  );
}

export default App;
