import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { App } from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './views/Login.tsx'
import { Register } from './views/Register.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
)
