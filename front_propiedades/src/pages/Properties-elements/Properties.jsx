import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

//import './Properties-elements/Properties-Styles.css'; // Mantén tus estilos
import './Properties-Styles.css'
import '../General-Styles.css'
import Filter from './Filter';
import PropertiesTable from './PropertiesTable';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';

function Properties() {
  const navigate = useNavigate(); // Inicializa useNavigate

  // Función para navegar a la página de detalles de la propiedad
  const goToDetails = () => {
    const propertyId = 1; // Aquí puedes cambiar el ID dinámicamente
    navigate(`/Properties-Details/${propertyId}`); // Navega a la ruta con el ID de la propiedad
  };

  // Función para navegar a la página de crear propiedad
  const goToCreate = () => {
    navigate('/Create-Properties'); // Navega a la página de creación de propiedades
  };

  return (
    <div id='Properties' className='pages-margin'>
      {/* Bootstrap Container */}
      <div className="container-fluid">
        <div className='row'>
          <div id='Barra-Propiedades' className='barra-superior'>
            <div className="col-1"></div>
            <div className="col-2">
              <h1 className='title-font'>Propiedades</h1>
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
                <button onClick={goToCreate} className='create-button button-font'>Crear Registro</button>
              </div>
            </div>
            <div className='col-1'></div>
          </div>
        </div>
        

        {/* Filtros */}
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'>
            <Filter />
          </div>
          <div className='col-1'></div>
        </div>
        

        {/* Tabla de Propiedades */}
        <div id='properties-table' className="row">
          <div className='col-1'></div>
          <div className="col-10">
            <PropertiesTable />
          </div>
          <div className='col-1'></div>
        </div>
      </div>
    </div>
  );
}

export default Properties;
