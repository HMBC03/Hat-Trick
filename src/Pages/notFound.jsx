import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error404.css"; // Archivo CSS para estilizar el componente

const Error404 = () => {
  return (
    <div className="wrapper">
        
      <div className="cloak__container">
        <div className="cloak"></div>
      </div>
      <div className="info">
        <h1 className="number">404</h1>
        <div className="text">
          <p>Pagina no encontrada</p>
          <span>
            
          </span>
        </div>
        
        <Link to="/">Inicio</Link>
        
      </div>
    </div>
  );
};

export default Error404;
