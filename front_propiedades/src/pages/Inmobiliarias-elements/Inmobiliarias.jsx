import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

import '../General-Styles.css'
import InmobiliariasTable from './InmobiliariasTable';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';

function Inmobiliarias() {

  return (
    <div id='Properties' className='pages-margin'>
      {/* Bootstrap Container */}
      <div className="container-fluid">
        <div className='row'>
        <div id='Barra-Propietarios' className='barra-superior'>
          <div className="col-1"></div>
          <div className="col-2">
            <h1 className='title-font'>Inmobiliarias </h1>
          </div>
          <div className='col-2'></div> 
          
          <div className='col-6 busqueda-creacion'>
            <div className="input-group barra-busqueda">
                <input type='text' className="form-control paragraph-font" placeholder='Buscar' />
                <span>
                  <SearchOutlinedIcon />
                </span>
            </div>
            
            <div>
              <button className='create-button button-font'>Crear Registro</button>
            </div>
          </div>
          <div className='col-1'></div>
        </div>
        </div>
        

        {/* Tabla de Propiedades */}
        <div id='owners-table' className="row">
          <div className='col-1'></div>
          <div className="col-10">
            <InmobiliariasTable />
          </div>
          <div className='col-1'></div>
        </div>
      </div>
    </div>
  );
}

export default Inmobiliarias;
