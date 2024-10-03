import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Properties-elements/Properties-Styles.css';
import '../Components-CP-Styles.css'
import '../../../../pages/General-Styles.css'

const InmRentPropertyForm = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [formValues, setFormValues] = useState({
        Inmob: '',
        policy: '',
        contract_time: '',
        months_notification: ''
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

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
      <div id='InmRentProperty-Table' className='container-GI'>
        <div className='container-fluid'>
          <div className='subtitle-font forms-title'>Información - Rentado Inmobiliaria</div>
            
            <div className='row row-elements'>
                <div className='col-3'>
                    <div className='subheader-font'>Inmobiliaria</div>
                    <select
                        name="Inmob"
                        className='button-font dropdown'
                        value={formValues.Inmob}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona</option>
                        <option value="apartment">Inmobiliarias varias</option>
                    </select>
                </div>
                <div className='col-3'>
                    <div className='subheader-font'>Póliza</div>
                    <select
                        name="policy"
                        className='button-font dropdown'
                        value={formValues.policy}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona</option>
                        <option value="policy_yes">Si</option>
                        <option value="policy_no">No</option>
                    </select>
                    
                </div>
                <div className='col-3'>
                    <div className='subheader-font'>Tiempo del contrato</div>
                    <select
                        name="contract_time"
                        className='button-font dropdown'
                        value={formValues.contract_time}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona</option>
                        <option value="month1">1</option>
                        <option value="month2">2</option>
                        <option value="month3">3</option>
                        <option value="month4">4</option>
                        <option value="month5">5</option>
                        <option value="month6">6</option>
                        <option value="month7">7</option>
                        <option value="month8">8</option>
                        <option value="month9">9</option>
                        <option value="month10">10</option>
                        <option value="month11">11</option>
                        <option value="month12">12</option>
                    </select>
                </div>
                <div className='col-3'>
                    <div className='subheader-font'>Canon arrendamiento</div>
                    <input placeholder='Ej: 1000'></input>  
                </div>
            </div>

          
            <div className='row row-elements'>
                <div className='col-3'>
                    <div className='subheader-font'>Canon administración</div>
                    <input placeholder='Ej: 1000'></input>  
                </div>
                <div className='col-3'>
                    <div className='subheader-font'>Incremento anual</div>
                    <input placeholder='Ej: 1000'></input>  
                </div>
                <div className='col-3'>
                    <div className='subheader-font'>Fecha inicio contrato</div>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        placeholderText="DD/MM/AAAA"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className='col-3'>
                    <div className='subheader-font'>Fecha renovación contrato</div>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        placeholderText="DD/MM/AAAA"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                
            </div>

            <div className='row row-elements'>
                <div className='col-3'>
                    <div className='subheader-font'>Meses previos notificación</div>
                    <select
                        name="months_notification"
                        className='button-font dropdown'
                        value={formValues.months_notification}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona</option>
                        <option value="month1">1</option>
                        <option value="month2">2</option>
                        <option value="month3">3</option>
                        <option value="month4">4</option>
                        <option value="month5">5</option>
                        <option value="month6">6</option>
                    </select>
                </div>
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
                <div className='col-6'>
                    
                </div>
            </div>
          

        </div>
        
      </div>
    );
  }
  
  export default InmRentPropertyForm;