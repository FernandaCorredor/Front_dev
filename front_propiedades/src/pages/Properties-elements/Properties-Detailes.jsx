import React from 'react';
import { useParams } from 'react-router-dom';
import './Properties-Styles.css';

function PropertiesDetailes() {
  const { id } = useParams(); // Obtener el ID de la propiedad desde la URL

  return (
    <div id='PropertiesDetailes' className='pages-margin'>
      <h1 className='properties-title'>Detalles Propiedad</h1>
      <div className='property-name'>Nombre Propiedad {id}</div> {/* Mostrar el ID */}
    </div>
  );
}

export default PropertiesDetailes;
