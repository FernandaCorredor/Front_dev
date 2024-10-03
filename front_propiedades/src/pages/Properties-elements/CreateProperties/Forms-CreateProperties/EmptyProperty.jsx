import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Properties-elements/Properties-Styles.css';
import '../Components-CP-Styles.css'
import '../../../../pages/General-Styles.css'

const EmptyPropertyForm = ({ mode }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const viewValues = {
    date: new Date('2022-12-15'),
    description: 'Texto predeterminado del textarea',
  };

  const initialFormValues = {
    date: null,
    description: '',
  };

  const [formValues, setFormValues] = useState(mode === 'view' ? viewValues : initialFormValues);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
        ...formValues,
        [name]: value,
    });
  };
  const handleDateChange = (date) => {
    setFormValues({
        ...formValues,
        date: date,
    });
  };

  // Función para renderizar un input
  const renderInput = (type, name, placeholder) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={formValues[name]}
            onChange={handleChange}
        />
    );
  };

  const renderSelect = (name, options) => {
      return (
          <select
              name={name}
              className='button-font dropdown'
              value={formValues[name]}
              onChange={handleChange}
          >
              <option value="">Selecciona</option>
              {options.map((option) => (
                  <option key={option.value} value={option.value}>
                      {option.label}
                  </option>
              ))}
          </select>
      );
  };

  const renderViewText = (text) => <div className='paragraph-font'>{text}</div>;

  
    return (
      <div id='EmptyProperty-Table' className='container-GI'>
        <div className='container-fluid'>
          <div className='subtitle-font forms-title'>Información - Vacío</div>

          {mode==='view' && (
            <form>
              <div className='row-elements'>
                <div className='subheader-font'>Fecha inicio</div>
                {renderViewText(formValues.date)}

              </div>
              <div className='row-elements'>
                <div className='subheader-font'>Descripción</div>
                <div className='paragraph-font'>PARRAFO bastante largo porque es la prueba y recordatorio de que tengo que mirar porque no me muestra lo que hay en el formValue</div>
                {renderViewText(formValues.description)}
              </div>
            </form> 
          )}

          {/* Modo "crear" */}
          {mode === 'create' && (
            <form>
              <div className='row-elements'>
                <div className='subheader-font'>Fecha inicio</div>
                <DatePicker
                    selected={formValues.date}
                    onChange={handleDateChange}
                    placeholderText="DD/MM/AAAA"
                    dateFormat="dd/MM/yyyy"
                />

              </div>
              <div className='row-elements'>
                <div className='subheader-font'>Descripción</div>
                <textarea placeholder='Escriba aquí la descripción que necesite'></textarea>
              </div>
            </form>           
          )}
          
          {/* Modo "editar" */}
          {mode === 'edit' && (
            <form>
              <div className='row-elements'>
                <div className='subheader-font'>Fecha inicio</div>
                <DatePicker
                    selected={formValues.date}
                    onChange={handleDateChange}
                    placeholderText="DD/MM/AAAA"
                    dateFormat="dd/MM/yyyy"
                />

              </div>
              <div className='row-elements'>
                <div className='subheader-font'>Descripción</div>
                <textarea placeholder='Escriba aquí la descripción que necesite'></textarea>
              </div>
            </form>           
          )}

        </div>
        
      </div>
    );
  }
  
  export default EmptyPropertyForm;