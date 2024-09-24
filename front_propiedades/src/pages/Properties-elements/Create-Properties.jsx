import React from 'react';
import './Properties-Styles.css';

function CreateProperties() {
  
    return (
        <div id='CreateProperties' className='pages-margin'>
        <h1 className='properties-title'>Crear Propiedad</h1>
      </div>
    );
  }
  
  export default CreateProperties;




/*
function CreateProperties() {
  const [propertyData, setPropertyData] = useState({}); // Estado para almacenar los datos del formulario
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Aquí harías una solicitud a la base de datos para guardar la nueva propiedad
    const newPropertyId = await savePropertyToDatabase(propertyData); // Simulación de guardar en base de datos

    // Después de guardar la propiedad, navega a la página de detalles de la propiedad recién creada
    navigate(`/Properties-Details/${newPropertyId}`);
  };

  // Función simulada para guardar la propiedad en la base de datos
  const savePropertyToDatabase = async (data) => {
    // Simula el guardado en la base de datos y retorna un nuevo ID de propiedad
    return 123; // Aquí iría el ID real que te devuelva la base de datos
  };

  return (
    <div>
      <h1>Crear Nueva Propiedad</h1>
      <form onSubmit={handleSubmit}>
        {/* Aquí irían los campos del formulario para los datos de la propiedad */
        /*
        <input type="text" placeholder="Nombre Propiedad" onChange={(e) => setPropertyData({ ...propertyData, name: e.target.value })} />
        <input type="text" placeholder="Ubicación" onChange={(e) => setPropertyData({ ...propertyData, location: e.target.value })} />
        {/* Otros campos necesarios */
        /*
        <button type="submit">Guardar Propiedad</button>
      </form>
    </div>
  );
}

export default CreateProperties;
*/
