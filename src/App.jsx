import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Encabezado from "./components/header"
import Inicio from "./Pages/inicio.jsx"
function App() {


  return (
    <>
     <Encabezado/>
     <Inicio/> 
    
    </>
    
  )
}

export default App
