import React, { useState } from 'react'; // Añadimos useState
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Para la navegación
import './Owners-Styles.css';
import '../General-Styles.css';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PopupCEOwner from './CreateEdit-Owner'; // Asegúrate de importar tu popup

const OwnersTable = () => {
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar el popup
  const [selectedOwner, setSelectedOwner] = useState(null); // Estado para guardar el propietario seleccionado

  const owners = [
    { id: 1, name: 'Juan Gomez', person_type: 'Natural', identification_type: 'Cedula', identification_number: '104855796' },
    { id: 2, name: 'Pedro Paez', person_type: 'Jurídica', identification_type: 'NIT', identification_number: '1-556266' },
    { id: 3, name: 'María Correa', person_type: 'Natural', identification_type: 'Cedula', identification_number: '107635796' },
  ];

  // Función para abrir el popup y establecer el propietario seleccionado
  const handleRowClick = (owner) => {
    setSelectedOwner(owner); // Guarda la fila seleccionada
    setShowPopup(true); // Muestra el popup
  };

  // Función para cerrar el popup
  const handleClosePopup = () => {
    setShowPopup(false); // Oculta el popup
    setSelectedOwner(null); // Limpia la selección
  };

  return (
    <div id="Properties-Table">
      <div>
        <table>
          <thead className="subheader-font">
            <tr>
              <th>Propietario</th>
              <th>Persona</th>
              <th>Tipo identificación</th>
              <th>Número identificación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody className="paragraph-font">
            {owners.map((owner) => (
              <tr key={owner.id} onClick={() => handleRowClick(owner)}> {/* Añadimos onClick a la fila */}
                <td>{owner.name}</td>
                <td>{owner.person_type}</td>
                <td>{owner.identification_type}</td>
                <td>{owner.identification_number}</td>
                <td>
                  <button className="table-buttons edit-button">
                    <ModeEditOutlineOutlinedIcon />
                  </button>
                  <button className="table-buttons delete-button">
                    <DeleteOutlinedIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="row">
        <div id="Table-Page-Count" className="col-12 table-pages">
          <span>Anterior</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>10</span>
          <span>Siguiente</span>
        </div>
      </div>


      {/* Componente Popup */}
      {showPopup && (
        <PopupCEOwner
          mode="view" // El modo es 'view' porque es sólo para ver los detalles
          show={showPopup}
          handleClose={handleClosePopup}
          selectedOwner={selectedOwner} // Cambiamos 'ownerData' por 'selectedOwner'
        />
      )}
    </div>
  );
};

export default OwnersTable;
