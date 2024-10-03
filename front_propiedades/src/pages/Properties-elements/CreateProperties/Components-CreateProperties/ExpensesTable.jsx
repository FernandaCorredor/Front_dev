import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Para la navegación

import '../../../Properties-elements/Properties-Styles.css'
import '../../../../pages/General-Styles.css'
import '../Components-CP-Styles.css'

import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PopupExpensesCreate from './ExpensesCreate'; // Importa el componente Popup

const ExpensesTable = () => {
  const navigate = useNavigate(); // Inicializa useNavigate
  const [showPopup, setShowPopup] = useState(false); // Estado para mostrar u ocultar el popup

  const properties = [
    { id: 1, nombre: 'Propiedad 1', estado: 'ARRIENDO', acciones: '' , ciudad: 'Ciudad 1'},
  ];

  const goToDetails = (propertyId) => {
    navigate(`../Properties-Details/${propertyId}`); // Navega a la ruta con el ID de la propiedad
  };

  const togglePopup = () => {
    setShowPopup(!showPopup); // Muestra u oculta el popup
  };

  return (
    <div id='Expenses-Table' style={{ marginTop: '2%', marginBottom: '5%'}}>
      <div className='row' style={{ marginBottom: '1%'}}>
        <div className='subtitle-font col-9'>Gastos mensuales</div>
        <button className='button-opc1 button-font col-3' onClick={togglePopup}>
          <AddOutlinedIcon/> 
          Registrar gasto mensual
        </button>
      </div>
      <div>
      <table>
        <thead  className='subheader-font'>
          <tr>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Gasto total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className='paragraph-font'>
          {properties.map((property) => (
            <tr key={property.id} onClick={() => goToDetails(property.id)}>
              <td>{property.nombre}</td>
              <td>{property.estado}</td>
              <td>{property.ciudad}</td>
              <td>
                <button className='table-buttons edit-button'><ModeEditOutlineOutlinedIcon/></button>
                <button className='table-buttons delete-button'><DeleteOutlinedIcon/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
      




      <div className='row'>
        <div id='Table-Page-Count' className='col-12 table-pages'>
         
        </div>
      </div>

      {/* Popup Component */}
      {showPopup && <PopupExpensesCreate show={showPopup} handleClose={togglePopup} />}
    </div>
  );
}

export default ExpensesTable;
