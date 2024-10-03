import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Properties-elements/Properties-Styles.css';
import '../../../../pages/General-Styles.css';
import '../Components-CP-Styles.css';

const GeneralInformationCP = ({ onStatusChange, mode }) => {
    const viewValues = {
        propertyType: 'apartment',
        city: 'city1',
        neighborhood: 'La Castellana',
        address: 'Cr15 Calle 63',
        registrationNumber: '123456',
        chipNumber: '7891011',
        date: new Date('2022-12-15'),
        value: '10000',
        owners: 'owner1',
        notaryNumber: '5',
        status: 'empty',
        file: { name: 'escritura.pdf' },
    };

    const initialFormValues = {
        propertyType: '',
        city: '',
        neighborhood: '',
        address: '',
        registrationNumber: '',
        chipNumber: '',
        date: null,
        value: '',
        owners: '',
        notaryNumber: '',
        status: '',
        file: null,
    };

    const [propertyStatus, setPropertyStatus] = useState(''); // Aquí se gestiona el estado del estatus

    useEffect(() => {
        // Notificar al componente padre cada vez que cambie el estado
        onStatusChange(propertyStatus); // Llama a la función proporcionada por el padre
    }, [propertyStatus]); // Efecto que se ejecuta cuando propertyStatus cambia

    const [formValues, setFormValues] = useState(mode === 'view' ? viewValues : initialFormValues);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });

        if (name === "status") {
            setPropertyStatus(value);
            onStatusChange(value);
        }
    };

    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile && uploadedFile.type === 'application/pdf') {
            setFormValues({
                ...formValues,
                file: uploadedFile,
            });
            console.log("PDF cargado:", uploadedFile);
        } else {
            alert('Por favor selecciona un archivo PDF.');
        }
    };

    const handleDateChange = (date) => {
        setFormValues({
            ...formValues,
            date: date,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (mode === 'create') {
            console.log('Simulación de envío: ', formValues);
            alert('Simulación: El archivo ha sido seleccionado.');
        }
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

    const renderViewText = (text) => <div className='view-text paragraph-font'>{text}</div>;

    return (
        <div id='CreateProperties' className='container-GI'>
            <div className="container-fluid">
                <div className='row align-items-center justify-content-between'>
                    <div id='Container GI-CP' className='col-12'>
                        <div className='subtitle-font forms-title'>Información general</div>

                        {/* Modo "ver" */}
                        {mode === 'view' && (
                            <>
                                <div className='row row-elements'>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Tipo de propiedad</div>
                                        {renderViewText(formValues.propertyType)}
                                    </div>

                                    <div className='col-3'>
                                        <div className='subheader-font'>Ciudad</div>
                                        {renderViewText(formValues.city)}
                                    </div>

                                    <div className='col-3'>
                                        <div className='subheader-font'>Barrio</div>
                                        {renderViewText(formValues.neighborhood)}
                                    </div>

                                    <div className='col-3'>
                                        <div className='subheader-font'>Dirección</div>
                                        {renderViewText(formValues.address)}
                                    </div>
                                </div>

                                <div className='row row-elements'>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Matrícula</div>
                                        {renderViewText(formValues.registrationNumber)}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Chip</div>
                                        {renderViewText(formValues.chipNumber)}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Fecha de escritura</div>
                                        {renderViewText(formValues.date ? formValues.date.toLocaleDateString() : '')}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Valor de escritura</div>
                                        {renderViewText(formValues.value)}
                                    </div>
                                </div>

                                <div className='row row-elements'>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Propietarios</div>
                                        {renderViewText(formValues.owners)}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Notaría #</div>
                                        {renderViewText(formValues.notaryNumber)}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Estado</div>
                                        {renderViewText(formValues.status)}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Adjuntar escritura (PDF)</div>
                                        {renderViewText(formValues.file?.name)}
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Modo "crear" */}
                        {mode === 'create' && (
                            <form onSubmit={handleSubmit}>
                                <div className='row row-elements'>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Tipo de propiedad</div>
                                        {renderSelect("propertyType", [
                                            { value: "apartment", label: "Apartamento" },
                                            { value: "house", label: "Casa" },
                                            { value: "office", label: "Oficina" }
                                        ])}
                                    </div>

                                    <div className='col-3'>
                                        <div className='subheader-font'>Ciudad</div>
                                        {renderSelect("city", [
                                            { value: "city1", label: "Bogotá" },
                                            { value: "city2", label: "Barranquilla" },
                                            { value: "city3", label: "Cali" },
                                            { value: "city4", label: "Cartagena" },
                                            { value: "city5", label: "Medellín" }
                                        ])}
                                    </div>

                                    <div className='col-3'>
                                        <div className='subheader-font'>Barrio</div>
                                        {renderInput("text", "neighborhood", "Ej: La castellana")}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Dirección</div>
                                        {renderInput("text", "address", "Ej: Cr15 Calle 63")}
                                    </div>
                                </div>

                                <div className='row row-elements'>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Matrícula</div>
                                        {renderInput("text", "registrationNumber", "Ej: Número matrícula")}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Chip</div>
                                        {renderInput("text", "chipNumber", "Ej: Número Chip")}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Fecha de escritura</div>
                                        <DatePicker
                                            selected={formValues.date}
                                            onChange={handleDateChange}
                                            placeholderText="DD/MM/AAAA"
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Valor de escritura</div>
                                        {renderInput("number", "value", "Ej: 10000")}
                                    </div>
                                </div>

                                <div className='row row-elements'>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Propietarios</div>
                                        {renderSelect("owners", [
                                            { value: "owner1", label: "Opción 1" },
                                            { value: "owner2", label: "Opción 2" },
                                            { value: "owner3", label: "Opción 3" }
                                        ])}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Notaría #</div>
                                        {renderInput("number", "notaryNumber", "Ej: 5")}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Estado</div>
                                        {renderSelect("status", [
                                            { value: "empty", label: "Vacío" },
                                            { value: "own-use", label: "Uso propio" },
                                            { value: "sold", label: "Vendido" },
                                            { value: "rent-inm", label: "Rentado Inmobiliaria" },
                                            { value: "rent-direct", label: "Rentado Directo" }
                                        ])}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Adjuntar escritura (PDF)</div>
                                        <input type="file" onChange={handleFileChange} accept="application/pdf" />
                                    </div>
                                </div>

                                <div className='row row-elements'>
                                    <div className='col-12'>
                                        <button type='submit' className='btn-submit'>Guardar</button>
                                    </div>
                                </div>
                            </form>
                        )}

                        {/* Modo "editar" */}
                        {mode === 'edit' && (
                            <form onSubmit={handleSubmit}>
                                <div className='row row-elements'>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Tipo de propiedad</div>
                                        {renderSelect("propertyType", [
                                            { value: "apartment", label: "Apartamento" },
                                            { value: "house", label: "Casa" },
                                            { value: "office", label: "Oficina" }
                                        ])}
                                    </div>

                                    <div className='col-3'>
                                        <div className='subheader-font'>Ciudad</div>
                                        {renderSelect("city", [
                                            { value: "city1", label: "Bogotá" },
                                            { value: "city2", label: "Barranquilla" },
                                            { value: "city3", label: "Cali" },
                                            { value: "city4", label: "Cartagena" },
                                            { value: "city5", label: "Medellín" }
                                        ])}
                                    </div>

                                    <div className='col-3'>
                                        <div className='subheader-font'>Barrio</div>
                                        {renderInput("text", "neighborhood", "Ej: La castellana")}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Dirección</div>
                                        {renderInput("text", "address", "Ej: Cr15 Calle 63")}
                                    </div>
                                </div>

                                <div className='row row-elements'>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Matrícula</div>
                                        {renderInput("text", "registrationNumber", "Ej: Número matrícula")}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Chip</div>
                                        {renderInput("text", "chipNumber", "Ej: Número Chip")}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Fecha de escritura</div>
                                        <DatePicker
                                            selected={formValues.date}
                                            onChange={handleDateChange}
                                            placeholderText="DD/MM/AAAA"
                                            dateFormat="dd/MM/yyyy"
                                        />
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Valor de escritura</div>
                                        {renderInput("number", "value", "Ej: 10000")}
                                    </div>
                                </div>

                                <div className='row row-elements'>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Propietarios</div>
                                        {renderSelect("owners", [
                                            { value: "owner1", label: "Opción 1" },
                                            { value: "owner2", label: "Opción 2" },
                                            { value: "owner3", label: "Opción 3" }
                                        ])}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Notaría #</div>
                                        {renderInput("number", "notaryNumber", "Ej: 5")}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Estado</div>
                                        {renderSelect("status", [
                                            { value: "empty", label: "Vacío" },
                                            { value: "own-use", label: "Uso propio" },
                                            { value: "sold", label: "Vendido" },
                                            { value: "rent-inm", label: "Rentado Inmobiliaria" },
                                            { value: "rent-direct", label: "Rentado Directo" }
                                        ])}
                                    </div>
                                    <div className='col-3'>
                                        <div className='subheader-font'>Adjuntar escritura (PDF)</div>
                                        <input type="file" onChange={handleFileChange} accept="application/pdf" />
                                    </div>
                                </div>

                                <div className='row row-elements'>
                                    <div className='col-12'>
                                        <button type='submit' className='btn-submit'>Guardar</button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralInformationCP;
