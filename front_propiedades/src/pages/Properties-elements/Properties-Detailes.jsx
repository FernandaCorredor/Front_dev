import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import { useMode } from '../../Context/context'; // Importa useMode sin envolver el componente en el Provider


import './Properties-Styles.css';
import '../../pages/General-Styles.css';

import EmptyPropertyForm from './CreateProperties/Forms-CreateProperties/EmptyProperty';
import SoldPropertyForm from './CreateProperties/Forms-CreateProperties/SoldProperty';
import OwnUsePropertyForm from './CreateProperties/Forms-CreateProperties/OwnUseProperty';
import InmRentPropertyForm from './CreateProperties/Forms-CreateProperties/InmRentProperty';
import DirectRentPropertyForm from './CreateProperties/Forms-CreateProperties/DirectRentProperty';

import TaxesTable from './CreateProperties/Components-CreateProperties/TaxesTable';
import ExpensesTable from './CreateProperties/Components-CreateProperties/ExpensesTable';
import GeneralInformationCP from './CreateProperties/Components-CreateProperties/GeneralInformation-CP';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

function PropertiesDetails() {
  const [mode, setMode] = useState("view"); // Estado para controlar el modo
  const [showSaveDiscardButtons, setShowSaveDiscardButtons] = useState(false); // Estado para mostrar los botones de guardar y descartar

  const [propertyStatus, setPropertyStatus] = useState(''); // Estado para el estatus de la propiedad

  // Esta función se pasa a GeneralInformationCP para recibir el estado
  const handleStatusChange = (status) => {
    setPropertyStatus(status);
    console.log("Estatus de propiedad actualizado:", status); // Aquí verificas si se recibe el estado
  };

  const handleEditClick = () => {
    setMode("edit"); // Cambia el modo a "edit"
    setShowSaveDiscardButtons(true); // Muestra los botones de guardar y descartar
  };
  
  return (
    <div id='CreateProperties' className='pages-margin'>
      <div className="container-fluid">
        <div className='row'>
          <div id='Barra-CP' className='barra-superior'>
            <div className="col-1"></div>
            <div className="col-8">
              <h1 className='title-font'>Detalles de la Propiedad</h1>
            </div>
            <div className='col'></div> 
          </div>
        </div>

        {/* Input Propertie Name */}
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-8'>
            <h2 className='dashnumber-font'>Nombre Propiedad</h2>
          </div>

          {/* Solo se muestra el botón de editar si el modo es "view" */}
          {mode === "view" && (
            <button className='button-opc1 button-font col-2' onClick={handleEditClick}>
                <ModeEditOutlineOutlinedIcon />
                Editar propiedad
            </button>
          )}
          
          <div className='col-1'></div>
        </div>

        {/* General Information input section */}
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'>
            <GeneralInformationCP onStatusChange={handleStatusChange} mode={mode} /> {/* Pasa el modo aquí */}
          </div>
          <div className='col-1'></div>
        </div>

        {/* Renderizado según el estado de la propiedad */}
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'>
            {propertyStatus === "empty" && <EmptyPropertyForm mode={mode}/>}
            {propertyStatus === "own-use" && <OwnUsePropertyForm />}
            {propertyStatus === "sold" && <SoldPropertyForm />}
            {propertyStatus === "rent-inm" && <InmRentPropertyForm />}
            {propertyStatus === "rent-direct" && <DirectRentPropertyForm />}
          </div>
          <div className='col-1'></div>
        </div>

        {/* Renderiza la tabla de impuestos */}
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'>
            <TaxesTable />
          </div>
          <div className='col-1'></div>
        </div>

        {/* Renderiza la tabla de gastos mensuales */}
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'>
            <ExpensesTable />
          </div>
          <div className='col-1'></div>
        </div>

        {/* Botones de guardar o descartar, solo se muestran si showSaveDiscardButtons es verdadero */}
        {showSaveDiscardButtons && (
          <div className='row'>
            <div className='col-8'></div>
            <div className='col-3 button-font save-discard-buttons' style={{ marginLeft: 'auto', textAlign: 'right' }}>
              <button className='discard-button'> 
                <DeleteOutlinedIcon />
                Descartar
              </button>
              <button className='save-button'>
                <CheckOutlinedIcon />
                Guardar
              </button>
            </div>
            <div className='col-1'></div>
          </div>
        )}
      </div>
    </div>
  );

  
}

export default PropertiesDetails; // Exporta el componente directamente
