import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

import '../General-Styles.css'
import InmobiliariasTable from './InmobiliariasTable';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';
import PopupCEInmobiliaria from './CreateEdit-Inmobiliarias'; // Importa el componente Popup


function Inmobiliarias() {
  const [mode, setMode] = useState("view"); // Estado para controlar el modo

  const [showPopup, setShowPopup] = useState(false); // Estado para mostrar u ocultar el popup
  const togglePopup = () => {
    setShowPopup(!showPopup); // Muestra u oculta el popup
  };

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
                <input type='text' className="paragraph-font form-control " placeholder='Buscar' />
                <span>
                  <SearchOutlinedIcon />
                </span>
                
            </div>
            
            <div>
              <button className='create-button button-font' onClick={togglePopup}>
                Agregar Inmobiliaria
              </button>
            </div>
          </div>
          <div className='col-1'></div>
        </div>
        </div>
        

        {/* Tabla de Propiedades */}
        <div id='Inmobiliarias-table' className="row">
          <div className='col-1'></div>
          <div className="col-10">
            <InmobiliariasTable />
          </div>
          <div className='col-1'></div>
        </div>
      </div>

      {/* Popup Component */}
      {showPopup && <PopupCEInmobiliaria show={showPopup} handleClose={togglePopup} mode="create"/>}
    </div>
  );
}

export default Inmobiliarias;
