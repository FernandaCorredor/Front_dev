import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import '../Components-CP-Styles.css';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const PopupExpensesCreate = ({ show, handleClose }) => {
  if (!show) return null;

  // Estado para manejar todos los campos del formulario
  const [formData, setFormData] = useState({
    year: '',
    avaluo: '',
    valorImpuesto: '',
    fechaPago: null,
    formaPago: '',
    banco: '',
    numeroCuenta: '',
    comprobantePago: null,
    observaciones: '',
  });

  // Maneja los cambios en los campos de texto y select
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Maneja el cambio de fecha
  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      fechaPago: date,
    }));
  };

  // Maneja el cambio del archivo PDF
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      setFormData((prevData) => ({
        ...prevData,
        comprobantePago: uploadedFile,
      }));
      console.log('PDF cargado:', uploadedFile);
    } else {
      alert('Por favor selecciona un archivo PDF.');
    }
  };

  // Maneja el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del formulario:', formData);
    alert('Simulación: El archivo ha sido seleccionado.');
    // Aquí puedes hacer la solicitud HTTP para enviar los datos a la base de datos
  };

  return (
    <div className="modal-overlay">
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="container-fluid">
          <div className="row row-elements">
            <h3 className="dashnumber-font">Registro gastos mensuales</h3>
          </div>
        </div>
        <div className="container-GI">
          <div className="container-fluid">
            <form onSubmit={handleSubmit}>
              <div className="row row-elements">
                <div className="col-3">
                  <div className='subheader-font'>Año</div>
                  <input
                    name="year"
                    placeholder="Ej: 2024"
                    value={formData.year}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-3">
                  <div className='subheader-font'>Avalúo</div>
                  <input
                    name="avaluo"
                    placeholder="Ej: "
                    value={formData.avaluo}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-3">
                  <div className='subheader-font'>Valor impuesto</div>
                  <input
                    name="valorImpuesto"
                    placeholder="Ej: "
                    value={formData.valorImpuesto}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-3">
                  <div className='subheader-font'>Fecha de pago</div>
                  <DatePicker
                    selected={formData.fechaPago}
                    onChange={handleDateChange}
                    placeholderText="DD/MM/AAAA"
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
              </div>

              <div className="row row-elements">
                <div className="col-3">
                  <div className='subheader-font'>Forma de pago</div>
                  <select
                    name="formaPago"
                    value={formData.formaPago}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Tarjeta de crédito">Tarjeta de crédito</option>
                    <option value="Transferencia bancaria">Transferencia bancaria</option>
                    <option value="Efectivo">Efectivo</option>
                  </select>
                </div>
                <div className="col-3">
                  <div className='subheader-font'>Banco</div>
                  <input
                    name="banco"
                    placeholder="Ej: Davivienda"
                    value={formData.banco}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-3">
                  <div className='subheader-font'>Número de cuenta</div>
                  <input
                    name="numeroCuenta"
                    placeholder="Ej: "
                    value={formData.numeroCuenta}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-3">
                  <div className='subheader-font'>Comprobante de pago</div>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                  />
                  {formData.comprobantePago && (
                    <p>Archivo seleccionado: {formData.comprobantePago.name}</p>
                  )}
                </div>
              </div>

              <div className="row row-elements">
                <div className="col">
                  <div className='subheader-font'>Observaciones</div>
                  <textarea
                    name="observaciones"
                    value={formData.observaciones}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='container-fluid'>
            {/* Botones de guardar o descartar */}
            <div className="row">
                <div className="col-8"></div>
                <div
                  className="col-4 button-font save-discard-buttons"
                  style={{ marginLeft: 'auto', textAlign: 'right' }}
                >
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
      </div>
    </div>
  );
};

export default PopupExpensesCreate;
