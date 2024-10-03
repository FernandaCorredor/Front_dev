import React, { useState, useEffect } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Inmobiliarias-Styles.css';
import '../General-Styles.css';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'; 
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'; 
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'; 
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const PopupCEInmobiliaria = ({ mode, show, handleClose, selectedOwner }) => { 
  if (!show) return null;

  const viewValues = selectedOwner || { 
    name: '', 
    NIT: '', 
    direction:'',
    city:'',
    principalcontact_name:'',
    principal_contact: '', 
    principal_email: '', 
    description:'',
  };

  const initialFormValues = { 
    name: '', 
    NIT: '', 
    direction:'',
    city:'',
    principalcontact_name:'',
    principal_contact: '', 
    principal_email: '', 
    description:'',
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

  const renderTextArea = (type, name, placeholder) => { 
    return ( 
      <textarea 
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
                <h3 className="dashnumber-font col-5">Detalle inmobiliaria</h3> 
                <button 
                  className='button-opc1 col-2' 
                  style={{ marginLeft: 'auto'}} 
                  onClick={() => setCurrentMode('edit')} // Cambiar al modo "edit"
                > 
                  Editar inmobiliaria 
                </button> 
              </div> 
            )}
            {currentMode === 'create' && <h3 className="dashnumber-font">Registro inmobiliaria</h3>} 
            {currentMode === 'edit' && <h3 className="dashnumber-font">Registro inmobiliaria</h3>} 
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
                    <div className='subheader-font'>NIT</div> 
                    {renderViewText(formValues.NIT)} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Dirección inmobiliaria</div> 
                    {renderViewText(formValues.direction)} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Ciudad</div> 
                    {renderViewText(formValues.city)} 
                  </div> 
                </div> 
                <div className="row row-elements"> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Nombre</div> 
                    {renderViewText(formValues.principalcontact_name)} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Persona</div> 
                    {renderViewText(formValues.principal_contact)} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Tipo de identificación</div> 
                    {renderViewText(formValues.principal_email)} 
                  </div> 
                  
                </div> 
                <div className="row row-elements">
                    <div className="col"> 
                        <div className='subheader-font'>Número identificación</div> 
                        {renderViewText(formValues.description)} 
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
                    {renderInput("text", "name", "Ej: Inmobiliaria Perez")} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>NIT</div> 
                    {renderInput("text", "NIT", "Ej: 8531226")} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Dirección inmobiliaria</div> 
                    {renderInput("text", "direction", "Ej: cr 15 #155")} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Ciudad</div> 
                    {renderSelect("city", [ 
                      { value: "Bogota", label: "Bogotá" }, 
                      { value: "Medellin", label: "Medellín" } 
                    ])} 
                  </div> 
                </div> 
                <div className="row row-elements"> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Nombre contacto</div> 
                    {renderInput("text", "principalcontact_name", "Ej: Juan Perez")} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Numero contacto</div> 
                    {renderInput("text", "principal_contact", "Ej: 3166254456")} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Correo contact</div> 
                    {renderInput("text", "principal_email", "Ej: jperez@gmail.com")} 
                  </div> 
                  
                </div> 

                <div className="row row-elements">
                <div className="col"> 
                    <div className='subheader-font'>Descripción adicional</div> 
                    {renderTextArea("text", "description", "Ej: Agregar contactos adicionales")} 
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
            <div className='container-GI'> 
              <div className='container-fluid'> 
                <div className='subtitle-font forms-title'>Información general</div> 
                <div className="row row-elements"> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Nombre</div> 
                    {renderInput("text", "name", "Ej: Inmobiliaria Perez")} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Persona</div> 
                    {renderInput("text", "NIT", "Ej: 8531226")} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Dirección inmobiliaria</div> 
                    {renderInput("text", "direction", "Ej: cr 15 #155")} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Ciudad</div> 
                    {renderSelect("city", [ 
                      { value: "Bogota", label: "Bogotá" }, 
                      { value: "Medellin", label: "Medellín" } 
                    ])} 
                  </div> 
                </div> 
                <div className="row row-elements"> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Nombre</div> 
                    {renderInput("text", "principalcontact_name", "Ej: Juan Perez")} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Persona</div> 
                    {renderInput("text", "principal_contact", "Ej: 3166254456")} 
                  </div> 
                  <div className="col-3"> 
                    <div className='subheader-font'>Tipo de identificación</div> 
                    {renderInput("text", "principal_email", "Ej: jperez@gmail.com")} 
                  </div> 
                  
                </div> 
                <div>
                    <div className="col"> 
                        <div className='subheader-font'>Número de identificación</div> 
                        {renderTextArea("text", "description", "Ej: Agregar contactos adicionales")} 
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

      </div> 
    </div> 
  ); 
};

export default PopupCEInmobiliaria;
