import React from 'react';

import InmobiliariasTable from './InmobiliariasTable'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Inmobiliarias() {
  return (
    <div id='Properties' className='pages-margin'>
      <div id= 'Barra-Superior' className='barra-superior'>
        <h1 className='inmobiliarias-title'>Inmobiliarias</h1>
        <div className='busqueda-creacion'>
          <div className='barra-busqueda'>
            <input type='text' placeholder='Buscar' />
            <SearchOutlinedIcon/>
          </div>
          <button>Crear Registro</button>
        </div>
      </div>
      <div id='inmobiliarias-table'>
        <InmobiliariasTable/>
      </div>
      
    </div>
  );
}

export default Inmobiliarias;
