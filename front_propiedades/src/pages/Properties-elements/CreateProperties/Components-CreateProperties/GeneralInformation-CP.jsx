import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Properties-elements/Properties-Styles.css';
import '../../../../pages/General-Styles.css';
import '../Components-CP-Styles.css';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';

const GeneralInformationCP = ({ onStatusChange }) => {
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

    const [formValues, setFormValues] = useState({
        propertyType: '',
        city: '',
        date: '',
        owners: '',
        status: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });

        // Llamamos a onStatusChange cuando se cambia el estado
        if (name === "status") {
            onStatusChange(value); // Envía el nuevo estado al componente padre
        }
    };

    return (
        <div id='CreateProperties' className='container-GI'>
            <div className="container-fluid">
                <div className='row align-items-center justify-content-between'>
                    <div id='Container GI-CP' className='col-12'>
                        <div className='subtitle-font'>Información general</div>

                        {/* Primera fila */}
                        <div className='row row-elements'>
                            <div className='col-3'>
                                <div className='subheader-font'>Tipo de propiedad</div>
                                <select
                                    name="propertyType"
                                    className='button-font dropdown'
                                    value={formValues.propertyType}
                                    onChange={handleChange}
                                >
                                    <option value="">Selecciona</option>
                                    <option value="apartment">Apartamento</option>
                                    <option value="house">Casa</option>
                                    <option value="office">Oficina</option>
                                </select>
                            </div>
                            
                            <div className='col-3'>
                                <div className='subheader-font'>Ciudad</div>
                                <select
                                    name="city"
                                    className='button-font dropdown'
                                    value={formValues.city}
                                    onChange={handleChange}
                                >
                                    <option value="">Selecciona</option>
                                    <option value="city1">Bogotá</option>
                                    <option value="city2">Barranquilla</option>
                                    <option value="city3">Cali</option>
                                    <option value="city4">Cartagena</option>
                                    <option value="city5">Medellín</option>
                                </select>
                            </div>
                            <div className='col-3'>
                                <div className='subheader-font'>Barrio</div>
                                <input placeholder='Ej: La castellana' />
                            </div>
                            <div className='col-3'>
                                <div className='subheader-font'>Dirección</div>
                                <input placeholder='Ej: Cr15 Calle 63' />
                            </div>
                        </div>

                        {/* Segunda fila */}
                        <div className='row row-elements'>
                            <div className='col-3'>
                                <div className='subheader-font'>Matrícula</div>
                                <input placeholder='Ej: Número matrícula' />
                            </div>
                            <div className='col-3'>
                                <div className='subheader-font'>Chip</div>
                                <input placeholder='Ej: Número Chip' />
                            </div>
                            <div className='col-3'>
                                <div className='subheader-font'>Fecha de escritura</div>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    placeholderText="DD/MM/AAAA"
                                    dateFormat="dd/MM/yyyy"
                                />
                            </div>
                            
                            <div className='col-3'>
                                <div className='subheader-font'>Valor de escritura</div>
                                <input placeholder='Ej: 10000' />
                            </div>
                        </div>

                        {/* Tercera fila */}
                        <div className='row row-elements'>
                            <div className='col-3'>
                                <div className='subheader-font'>Propietarios</div>
                                <select
                                    name="owners"
                                    className='button-font dropdown'
                                    value={formValues.owners}
                                    onChange={handleChange}
                                >
                                    <option value="">Selecciona</option>
                                    <option value="owner1">Opción 1</option>
                                    <option value="owner2">Opción 2</option>
                                    <option value="owner3">Opción 3</option>
                                </select>
                            </div>
                            <div className='col-9'></div>
                        </div>

                        {/* Cuarta fila */}
                        <div className='row row-elements'>
                            <div className='col-3'>
                                <div className='subheader-font'>Notaría #</div>
                                <input placeholder='Ej: 1' />
                            </div>
                            <div className='col-3'>
                                <div className='subheader-font'>Estado</div>
                                <select
                                    name="status"
                                    className='button-font dropdown'
                                    value={formValues.status}
                                    onChange={handleChange}
                                >
                                    <option value="">Selecciona</option>
                                    <option value="empty">Vacío</option>
                                    <option value="own-use">Uso propio</option>
                                    <option value="rent-inm">Rentado Inmobiliaria</option>
                                    <option value="rent-direct">Rentado Directo</option>
                                    <option value="sold">Vendido</option>
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
                            <div className='col-3'>
                                <div>Hol</div>
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
            </div>
        </div>
    );
}

export default GeneralInformationCP;
