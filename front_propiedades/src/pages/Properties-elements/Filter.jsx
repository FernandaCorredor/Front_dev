
import React, { useState } from 'react';
import './Properties-Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState(''); // Estado para guardar la opción seleccionada

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Actualiza el estado con la opción seleccionada
  };

    return (
      <div id='Filter' className='filter-container'>
        <div className='container-fluid'>
          <div className='row'>
            <h3 className='col-1'>Filtros</h3>
            <div className='col-2 filter-dropdown'>
              {/*Tipo propiedad */}
              <select value={selectedOption} onChange={handleChange}>
                <option value="">Tipo de propiedad</option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
                <option value="opcion3">Opción 3</option>
              </select>
            </div>

            <div className='col-2 filter-dropdown'>
              {/*Tipo propiedad */}
              <select value={selectedOption} onChange={handleChange}>
                <option value="">Ciudad</option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
                <option value="opcion3">Opción 3</option>
              </select>
            </div>

            <div className='col-2 filter-dropdown'>
              {/*Tipo propiedad */}
              <select value={selectedOption} onChange={handleChange}>
                <option value="">Estado</option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
                <option value="opcion3">Opción 3</option>
              </select>
            </div>
            <div className='col-2 filter-dropdown'>
              {/*Tipo propiedad */}
              <select value={selectedOption} onChange={handleChange}>
                <option value="">Notificaciones</option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
                <option value="opcion3">Opción 3</option>
              </select>
            </div>


          </div>

        </div>
          

          
      </div>
    );
  }
  
  export default Filter;