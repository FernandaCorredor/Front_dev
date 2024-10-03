import React, { useState } from 'react'; // Añadimos useState
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom'; // Para la navegación
import './Inmobiliarias-Styles.css';
import '../General-Styles.css'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PopupCEInmobiliaria from './CreateEdit-Inmobiliarias'; // Importa el componente Popup

const InmobiliariasTable = () => {
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar el popup
  const [selectedOwner, setSelectedOwner] = useState(null); // Estado para guardar el propietario seleccionado

  // Datos simulados de propiedades (puedes reemplazarlos luego con datos de la base de datos)

  const inmobiliarias = [
    { id: 1, name: 'Propiedad 1', NIT: 'Tipo 1', direction:'calle 10', city:'', principalcontact_name:'', principal_contact: 'Ciudad 1', principal_email: 'Dirección 1', description:'Párrafo descriptivo de prueba', acciones: '' },
    { id: 2, name: 'Propiedad 2', NIT: 'Tipo 2', direction:'carrera 12b', city:'', principalcontact_name:'', principal_contact: 'Ciudad 2', principal_email: 'Dirección 2', description:'Párrafo descriptivo de prueba', acciones: '' },
    { id: 3, name: 'Propiedad 3', NIT: 'Tipo 3', direction:'', city:'', principalcontact_name:'', principal_contact: 'Ciudad 3', principal_email: 'Dirección 3', description:'', acciones: '' },
    // Agrega más propiedades si es necesario
  ];

    // Función para abrir el popup y establecer el propietario seleccionado
    const handleRowClick = (owner) => {
      setSelectedOwner(owner); // Guarda la fila seleccionada
      setShowPopup(true); // Muestra el popup
    };
  
    // Función para cerrar el popup
    const handleClosePopup = () => {
      setShowPopup(false); // Oculta el popup
      setSelectedOwner(null); // Limpia la selección
    };

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
          {inmobiliarias.map((inmob) => (
            <tr key={inmob.id} onClick={() => handleRowClick(inmob)}>
              <td>{inmob.name}</td>
              <td>{inmob.NIT}</td>
              <td>{inmob.principal_contact}</td>
              <td>{inmob.principal_email}</td>
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
       {/* Componente Popup */}
       {showPopup && (
        <PopupCEInmobiliaria
          mode="view" // El modo es 'view' porque es sólo para ver los detalles
          show={showPopup}
          handleClose={handleClosePopup}
          selectedOwner={selectedOwner} // Cambiamos 'ownerData' por 'selectedOwner'
        />
      )}
    </div>
  );
}

export default InmobiliariasTable;
