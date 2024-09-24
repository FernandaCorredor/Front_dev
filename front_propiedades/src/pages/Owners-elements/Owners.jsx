import React from 'react';
import PropietariosTable from './OwnersTable';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Propietarios() {
  return (
    <div id='Properties' className='pages-margin'>
    <div id= 'Barra-Superior' className='barra-superior'>
      <h1 className='propietarios-title'>Propietarios</h1>
      <div className='busqueda-creacion'>
          <div className='barra-busqueda'>
            <input type='text' placeholder='Buscar' />
            <SearchOutlinedIcon/>
          </div>
          <button>Crear Registro</button>
        </div>
    </div>
    <div id='propietarios-table'>
      <PropietariosTable/>
    </div>
  </div>
  );
}

export default Propietarios;
