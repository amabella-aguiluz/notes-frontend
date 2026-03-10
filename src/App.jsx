import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from "./routes/appRoutes";
import { AuthProvider } from './context/authContext';

function App() {

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App;
