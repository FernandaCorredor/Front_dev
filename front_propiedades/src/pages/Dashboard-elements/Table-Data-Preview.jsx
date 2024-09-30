import React from 'react';
import './Dashboard-Styles.css'
import '../General-Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const TableDataPreview = () => {
    // Datos simulados de propiedades (puedes reemplazarlos luego con datos de la base de datos)
    const properties = [
      { id: 1, nombre: 'Propiedad 1', tipo: 'Tipo 1', ciudad: 'Ciudad 1', direccion: 'Dirección 1', estado: 'ARRIENDO', notificaciones: 'Nota de notificación', acciones: '' },
      { id: 2, nombre: 'Propiedad 2', tipo: 'Tipo 2', ciudad: 'Ciudad 2', direccion: 'Dirección 2', estado: 'VENDIDO', notificaciones: 'Nota de notificación', acciones: '' },
      { id: 3, nombre: 'Propiedad 3', tipo: 'Tipo 3', ciudad: 'Ciudad 3', direccion: 'Dirección 3', estado: 'USO PROPIO', notificaciones: '----', acciones: '' },
      // Agrega más propiedades si es necesario
    ];
  return (
    <div id='Dashboard-Table'>
      <div>
      <table>
        <thead  className='subheader-font'>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Ciudad</th>
            <th>Dirección</th>
            <th>Estado</th>
            <th>Notificaciones</th>
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
              <td>{property.estado}</td>
              <td>{property.notificaciones}</td>
              <td>
                <button className='table-buttons edit-button'><ModeEditOutlineOutlinedIcon/></button>
                <button className='table-buttons delete-button'><DeleteOutlinedIcon/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
      

      
    </div>
  );
}

export default TableDataPreview;
