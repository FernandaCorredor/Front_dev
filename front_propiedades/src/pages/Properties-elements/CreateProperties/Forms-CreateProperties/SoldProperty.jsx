import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Properties-elements/Properties-Styles.css';
import '../Components-CP-Styles.css'
import '../../../../pages/General-Styles.css'

const SoldPropertyForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [file, setFile] = useState(null);
    
    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile && uploadedFile.type === 'application/pdf') {
            setFile(uploadedFile);
            console.log("PDF cargado:", uploadedFile);
        } else {
            alert('Por favor selecciona un archivo PDF.');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Simulación de envío: ', file);
        alert('Simulación: El archivo ha sido seleccionado.');
    };
    return (
      <div id='SoldyProperty-Table' className='container-GI'>
        <div className='container-fluid'>
          <div className='subtitle-font forms-title'>Información - Vendido</div>
            <div className=' row row-elements'>
                <div className='col-3'>
                    <div className='subheader-font'>Nombre del cliente</div>
                    <input placeholder='Ej: Pablo González'></input>

                </div>
                <div className='col-3'>
                    <div className='subheader-font'>Cédula</div>
                    <input placeholder='Ej: 10547832'></input>

                </div>
                <div className='col-3'>
                    <div className='subheader-font'>Valor de la venta</div>
                    <input placeholder='Ej: 1000'></input>

                </div>
                <div className='col-3'>
                    <div className='subheader-font'>Forma de pago</div>
                    <input placeholder='Ej: Transferencia'></input>

                </div>
            </div>

            <div className='row'>
                <div className='col-3'>
                    <div className='subheader-font'>Adjuntos</div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="file"
                            id="pdfUpload"
                            accept="application/pdf"
                            onChange={handleFileChange}
                        />
                        {file && <p>Archivo seleccionado: {file.name}</p>}
                        <button type="submit">Simular envío</button>
                    </form>

                </div>
            </div>

        </div>
        
      </div>
    );
  }
  
  export default SoldPropertyForm;