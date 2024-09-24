import React from 'react';
import './Dashboard-Styles.css'

const CardsContainer = () => {
  return (
    <div id='Cards-Container' className='cards-container'>
        <div id='Card-1'>
          <h3>100</h3>
          <p>Total de propiedades</p>
        </div>
        <div id='Card-2'>
          <h3>100</h3>
          <p>Propiedades vacías</p>
        </div>
        <div id='Card-3'>
          <h3>100</h3>
          <p>Propiedades en uso propio</p>
        </div>
        <div>
          <h3>100</h3>
          <p>Propiedades en renta con inmobiliaria</p>
        </div>
        <div>
          <h3>100</h3>
          <p>Propiedades en renta directa</p>
        </div>
        <div>
          <h3>100</h3>
          <p>Propiedades vendidas</p>
        </div>

        
    </div>
  );
}

export default CardsContainer;
