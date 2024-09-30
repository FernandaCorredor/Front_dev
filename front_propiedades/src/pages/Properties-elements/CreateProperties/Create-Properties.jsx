import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

import '../../Properties-elements/Properties-Styles.css'
import '../../../pages/General-Styles.css'

import TaxesTable from './Components-CreateProperties/TaxesTable';
import ExpensesTable from './Components-CreateProperties/ExpensesTable';
import GeneralInformationCP from '../CreateProperties/Components-CreateProperties/GeneralInformation-CP';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

function CreateProperties() {
  const [propertyStatus, setPropertyStatus] = useState('');

  const handleStatusChange = (status) => {
    setPropertyStatus(status);
  };

  return (
    <div id='CreateProperties' className='pages-margin'>
      {/* Bootstrap Container */}
      <div className="container-fluid">
        <div className='row'>
          <div id='Barra-CP' className='barra-superior'>
            <div className="col-1"></div>
            <div className="col-5">
              <h1 className='title-font'>Crear Propiedad</h1>
            </div>
            <div className='col'></div> 
          </div>
        </div>

        {/*Input Propertie Name*/}
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'>
            <h2 className='dashnumber-font'>Nombre Propiedad</h2>
          </div>
          <div className='col-1'></div>
        </div>

        {/*General Information input section*/}
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'>
            <GeneralInformationCP onStatusChange={handleStatusChange} />
          </div>
          <div className='col-1'></div>
        </div>

        {/* Aquí se renderizan los JSX en función del estado de la propiedad */}
        {propertyStatus === "empty" && <div>Renderiza contenido para propiedad vacía</div>}
        {propertyStatus === "rent-inm" && <div>Renderiza contenido para propiedad en renta inmobiliaria</div>}
        {propertyStatus === "rent-direct" && <div>Renderiza contenido para propiedad rentada directamente</div>}

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

        

        {/* Botones de guardar o descartar */}
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
        
      </div>
    </div>
  );
}

export default CreateProperties;
