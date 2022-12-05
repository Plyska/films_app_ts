import React from 'react';
import './App.css';
import AppRouter from './router/AppRouter';
import { AppContextProvider } from "./context/AppContext";
// import { QueryClient, QueryClientProvider } from 'react-query';

// const client = new QueryClient({
//   defaultOptions: {
//     queries: {
//       suspense: true
//     }
//   }
// })

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <QueryClientProvider client={client}> */}
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
      {/* </QueryClientProvider> */}
    </div>
  );
}

export default App;
