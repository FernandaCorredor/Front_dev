import React from 'react';
import './Dashboard-Styles.css'
import '../General-Styles.css'

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

const CardsContainer = () => {
  return (
    <div id='Cards-Container' className='cards-container container-fluid'>
      <div className='row'>
      <div id='Card-1' className='col cards'>
          <h3 className='dashnumber-font'>100</h3>
          <p className='paragraph-font'>Total de propiedades</p>
        </div>
        <div id='Card-2' className='col cards'>
          <h3 className='dashnumber-font'>100</h3>
          <p className='paragraph-font'>Propiedades vacías</p>
        </div>
        <div id='Card-3' className='col cards'>
          <h3 className='dashnumber-font'>100</h3>
          <p className='paragraph-font'>Propiedades en uso propio</p>
        </div>
        <div id='Card-4' className='col cards'>
          <h3 className='dashnumber-font'>100</h3>
          <p className='paragraph-font'>Propiedades en renta con inmobiliaria</p>
        </div>
        <div id='Card-5' className='col cards'>
          <h3 className='dashnumber-font'>100</h3>
          <p className='paragraph-font'>Propiedades en renta directa</p>
        </div>
        {/*<div id='Card-6' className='col cards'>
          <h3 className='dashnumber-font'>100</h3>
          <p className='paragraph-font'>Propiedades vendidas</p>
        </div>*/}
      </div>
        

        
    </div>
  );
}

export default CardsContainer;
