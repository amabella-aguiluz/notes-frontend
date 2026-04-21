import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from "./routes/appRoutes";
import { AuthProvider } from './context/authContext';

import Flashlight from './components/flashlight';

function App() {

  return (
    <AuthProvider>
      <AppRoutes />
      <Flashlight />
    </AuthProvider>
  )
}

export default App;
