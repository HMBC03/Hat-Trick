import React from 'react'
import './styles/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Pages
import Inicio from "./Pages/inicio.jsx";
import Store from "./Pages/store.jsx"
import Error404 from './Pages/notFound.jsx';
function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Store" element={<Store />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>

  );
}

export default App
