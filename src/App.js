import React from 'react';
import './App.css';
import PageRouter from './router/PageRouter';


function App() {
  return (
    <React.Suspense fallback={null}>
      <PageRouter />
    </React.Suspense>
  );
}

export default App;
