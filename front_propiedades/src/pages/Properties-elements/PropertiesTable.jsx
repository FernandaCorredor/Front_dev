import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom'; // Para la navegación
import './Properties-Styles.css';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const PropertiesTable = () => {
  const navigate = useNavigate(); // Inicializa useNavigate

  // Datos simulados de propiedades (puedes reemplazarlos luego con datos de la base de datos)
  const properties = [
    { id: 1, nombre: 'Propiedad 1', tipo: 'Tipo 1', ciudad: 'Ciudad 1', direccion: 'Dirección 1', estado: 'ARRIENDO', notificaciones: 'Nota de notificación', acciones: '' },
    { id: 2, nombre: 'Propiedad 2', tipo: 'Tipo 2', ciudad: 'Ciudad 2', direccion: 'Dirección 2', estado: 'VENDIDO', notificaciones: 'Nota de notificación', acciones: '' },
    { id: 3, nombre: 'Propiedad 3', tipo: 'Tipo 3', ciudad: 'Ciudad 3', direccion: 'Dirección 3', estado: 'USO PROPIO', notificaciones: '----', acciones: '' },
    // Agrega más propiedades si es necesario
  ];

  // Función para navegar a la página de detalles
  const goToDetails = (propertyId) => {
    navigate(`../Properties-Details/${propertyId}`); // Navega a la ruta con el ID de la propiedad
  };

  return (
    <div id='Properties-Table'>
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
            <tr key={property.id} onClick={() => goToDetails(property.id)}>
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

export default PropertiesTable;
