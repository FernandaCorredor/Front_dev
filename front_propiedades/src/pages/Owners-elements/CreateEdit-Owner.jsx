import React, { useState, useEffect } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Owners-Styles.css'; 
import '../General-Styles.css';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'; 
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'; 
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'; 
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const PopupCEOwner = ({ mode, show, handleClose, selectedOwner }) => { 
  if (!show) return null;

  const viewValues = selectedOwner || { 
    name: '', 
    person_type: '', 
    identification_type: '', 
    identification_number: '', 
  };

  const initialFormValues = { 
    name: '', 
    person_type: '', 
    identification_type: '', 
    identification_number: '', 
  };

  const [formValues, setFormValues] = useState(mode === 'view' ? viewValues : initialFormValues);

  // Estado para manejar el modo actual
  const [currentMode, setCurrentMode] = useState(mode);

  // Para actualizar el estado si el selectedOwner cambia 
  useEffect(() => { 
    if (mode === 'view') { 
      setFormValues(viewValues); 
    } 
  }, [selectedOwner, mode]);

  const handleChange = (event) => { 
    const { name, value } = event.target; 
    setFormValues({
      ...formValues, 
      [name]: value, 
    }); 
  };

  const handleSubmit = (event) => { 
    event.preventDefault(); 
    console.log('Datos del formulario:', formValues); 
    alert('Simulación: Datos guardados.');
    // Aquí puedes hacer la solicitud HTTP para enviar los datos a la base de datos 
  };

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
    <div id='CEOwner-Popup' className="modal-overlay"> 
      <div className="popup-content" onClick={(e) => e.stopPropagation()}> 
        <div className='container-fluid'> 
          <div className='row'> 
            <div className='col-11'></div> 
            <div className='col-1' style={{ marginLeft: 'auto', textAlign: 'right' }} onClick={handleClose}> 
              <CloseOutlinedIcon /> 
            </div> 
          </div> 
          <div className='row row-elements'> 
            {currentMode === 'view' && ( 
              <div className='row' style={{marginTop:'2%'}}> 
                <h3 className="dashnumber-font col-5">Detalle propietario</h3> 
                <button 
                  className='button-opc1 col-2' 
                  style={{ marginLeft: 'auto'}} 
                  onClick={() => setCurrentMode('edit')} // Cambiar al modo "edit"
                > 
                  Editar propietario 
                </button> 
              </div> 
            )}
            {currentMode === 'create' && <h3 className="dashnumber-font">Registro propietario</h3>} 
            {currentMode === 'edit' && <h3 className="dashnumber-font">Editar propietario</h3>} 
          </div> 
        </div>

        {/* Modo "ver" */} 
        {currentMode === 'view' && ( 
          <form onSubmit={handleSubmit}> 
            <div className='container-GI'> 
              <div className='container-fluid'> 
                <div className='subtitle-font forms-title'>Información general</div> 
                <div className="row row-elements"> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Nombre</div> 
                    {renderViewText(formValues.name)} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Persona</div> 
                    {renderViewText(formValues.person_type)} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Tipo de identificación</div> 
                    {renderViewText(formValues.identification_type)} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Número identificación</div> 
                    {renderViewText(formValues.identification_number)} 
                  </div> 
                </div> 
              </div> 
            </div> 
          </form> 
        )}

        {/* Modo "crear" */} 
        {currentMode === 'create' && ( 
          <form onSubmit={handleSubmit}> 
            <div className='container-GI'> 
              <div className='container-fluid'> 
                <div className='subtitle-font forms-title'>Información general</div> 
                <div className="row row-elements"> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Nombre</div> 
                    {renderInput("text", "name", "Ej: Pepito Pérez")} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Persona</div> 
                    {renderSelect("person_type", [ 
                      { value: "Persona_Natural", label: "Natural" }, 
                      { value: "Persona_Juridica", label: "Jurídica" } 
                    ])} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Tipo de identificación</div> 
                    {renderSelect("identification_type", [ 
                      { value: "Cedula", label: "Cédula" }, 
                      { value: "NIT", label: "NIT" } 
                    ])} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Número de identificación</div> 
                    {renderInput("text", "identification_number", "Ej: 1015478862")} 
                  </div> 
                </div> 
              </div> 
            </div>

            <div className='container-fluid'> 
              <div className="row"> 
                <div className="col-8"></div> 
                <div className="col-4 button-font save-discard-buttons" style={{ marginLeft: 'auto', textAlign: 'right' }}> 
                  <button className="discard-button" onClick={handleClose}> 
                    <DeleteOutlinedIcon /> 
                    Descartar 
                  </button> 
                  <button type="submit" className="save-button"> 
                    <CheckOutlinedIcon /> 
                    Guardar 
                  </button> 
                </div> 
              </div> 
            </div> 
          </form> 
        )}

        {/* Modo "editar" */} 
        {currentMode === 'edit' && ( 
          <form onSubmit={handleSubmit}> 
            <div className="row row-elements"> 
              <div className="col-3"> 
                <div className='subheader-font'>Nombre</div> 
                {renderInput("text", "name", "Ej: Pepito Pérez")} 
              </div> 
              <div className="col-3"> 
                <div className='subheader-font'>Persona</div> 
                {renderSelect("person_type", [ 
                  { value: "Persona_Natural", label: "Natural" }, 
                  { value: "Persona_Juridica", label: "Jurídica" } 
                ])} 
              </div> 
              <div className="col-3"> 
                <div className='subheader-font'>Tipo de identificación</div> 
                {renderSelect("identification_type", [ 
                  { value: "Cedula", label: "Cédula" }, 
                  { value: "NIT", label: "NIT" } 
                ])} 
              </div> 
              <div className="col-3"> 
                <div className='subheader-font'>Número de identificación</div> 
                {renderInput("text", "identification_number", "Ej: 1015478862")} 
              </div> 
            </div>

            <div className="row"> 
              <div className="col-8"></div> 
              <div className="col-4 button-font save-discard-buttons" style={{ marginLeft: 'auto', textAlign: 'right' }}> 
                <button className="discard-button" onClick={handleClose}> 
                  <DeleteOutlinedIcon /> 
                  Descartar 
                </button> 
                <button type="submit" className="save-button"> 
                  <CheckOutlinedIcon /> 
                  Guardar 
                </button> 
              </div> 
            </div> 
          </form> 
        )}
      </div> 
    </div> 
  ); 
};

export default PopupCEOwner;
