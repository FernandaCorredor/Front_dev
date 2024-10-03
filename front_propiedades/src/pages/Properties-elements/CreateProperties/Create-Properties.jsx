import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

import '../../Properties-elements/Properties-Styles.css';
import '../../../pages/General-Styles.css';

import EmptyPropertyForm from './Forms-CreateProperties/EmptyProperty';
import SoldPropertyForm from './Forms-CreateProperties/SoldProperty';
import OwnUsePropertyForm from './Forms-CreateProperties/OwnUseProperty';
import InmRentPropertyForm from './Forms-CreateProperties/InmRentProperty';
import DirectRentPropertyForm from './Forms-CreateProperties/DirectRentProperty';

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
            {/* Aquí pasamos el modo "create" al componente GeneralInformationCP */}
            <GeneralInformationCP onStatusChange={handleStatusChange} mode="create" />
          </div>
          <div className='col-1'></div>
        </div>

        {/* Aquí se renderizan los JSX en función del estado de la propiedad */}
        <div className='row'>
          <div className='col-1'> </div>
          <div className='col-10'>
            {propertyStatus === "empty" && <div> <EmptyPropertyForm mode="create"/> </div>}
            {propertyStatus === "own-use" && <div> <OwnUsePropertyForm/> </div>}
            {propertyStatus === "sold" && <div> <SoldPropertyForm/> </div>}
            {propertyStatus === "rent-inm" && <div> <InmRentPropertyForm/></div>}
            {propertyStatus === "rent-direct" && <div> <DirectRentPropertyForm/> </div>}
          </div>
          
          <div className='col-1'> </div>
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
