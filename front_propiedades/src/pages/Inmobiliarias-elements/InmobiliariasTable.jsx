import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom'; // Para la navegación
import './Inmobiliarias-Styles.css';
import '../General-Styles.css'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const InmobiliariasTable = () => {

  // Datos simulados de propiedades (puedes reemplazarlos luego con datos de la base de datos)
  const properties = [
    { id: 1, nombre: 'Propiedad 1', tipo: 'Tipo 1', ciudad: 'Ciudad 1', direccion: 'Dirección 1', acciones: '' },
    { id: 2, nombre: 'Propiedad 2', tipo: 'Tipo 2', ciudad: 'Ciudad 2', direccion: 'Dirección 2', acciones: '' },
    { id: 3, nombre: 'Propiedad 3', tipo: 'Tipo 3', ciudad: 'Ciudad 3', direccion: 'Dirección 3', acciones: '' },
    // Agrega más propiedades si es necesario
  ];

  return (
    <div id='Properties-Table'>
      <div>
      <table>
        <thead  className='subheader-font'>
          <tr>
            <th>Inmobiliaria</th>
            <th>NIT</th>
            <th>Contacto telefónico</th>
            <th>Correo electrónico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className='paragraph-font'>
          {properties.map((property) => (
            <tr key={property.id}>
              <td>{property.nombre}</td>
              <td>{property.tipo}</td>
              <td>{property.ciudad}</td>
              <td>{property.direccion}</td>
              <td>
                <button className='table-buttons edit-button'><ModeEditOutlineOutlinedIcon/></button>
                <button className='table-buttons delete-button'><DeleteOutlinedIcon/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
      

      {/* Paginación */}
      <div className='row'>
        <div id='Table-Page-Count' className='col-12 table-pages'>
          <span>Anterior</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>10</span>
          <span>Siguiente</span>
        </div>

      </div>
      
    </div>
  );
}

export default InmobiliariasTable;
