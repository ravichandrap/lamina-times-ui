import React from 'react';
import './App.css';
import { LaminaHome } from './components/LaminaHome';
import { LaminaProvider } from './components/hooks/context/LaminaProvider'
function App() {
  return <LaminaProvider><LaminaHome /></LaminaProvider>
}

export default App;
