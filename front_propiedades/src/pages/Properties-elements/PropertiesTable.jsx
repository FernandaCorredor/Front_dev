import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom'; // Para la navegación
import './Properties-Styles.css';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteRegister from '../../components/Popups-Feedback/Popup-DeleteRegister'

const PropertiesTable = () => {
  const navigate = useNavigate(); // Inicializa useNavigate

  // Estado para controlar la visibilidad del popup
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

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

  // Función para mostrar el popup y seleccionar la propiedad a eliminar
  const handleDeleteClick = (propertyId) => {
    setSelectedProperty(propertyId); // Guardamos la propiedad seleccionada
    setShowPopup(true); // Mostramos el popup
  };

  // Función para cerrar el popup
  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedProperty(null); // Limpiamos la selección de la propiedad
  };

  // Función para confirmar la eliminación
  const handleConfirmDelete = () => {
    console.log(`Eliminando la propiedad con ID: ${selectedProperty}`);
    setShowPopup(false); // Cerramos el popup después de confirmar
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
                <button id='edit' className='table-buttons edit-button'><ModeEditOutlineOutlinedIcon/></button>
                <button 
                  id='delete' 
                  className='table-buttons delete-button' 
                  onClick={(e) => {
                    e.stopPropagation(); // Evitar que el evento clic en el delete dispare el evento de la fila
                    handleDeleteClick(property.id);
                  }}
                >
                  <DeleteOutlinedIcon/>
                </button>
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

      {/* Popup de eliminación */}
      {showPopup && (
        <DeleteRegister 
          show={showPopup}
          handleClose={handleClosePopup}
          eliminarAccion={handleConfirmDelete}
        />
      )}
    </div>
  );
}

export default PropertiesTable;
