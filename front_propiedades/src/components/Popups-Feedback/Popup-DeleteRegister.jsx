import React, { useState } from 'react';
import './Popup-Styles.css'; // Tu archivo de estilos personalizado
import '../../pages/General-Styles.css';
import RegisterDeleted from './Popup-RegisterDeleted';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function DeleteRegister({ show, handleClose, eliminarAccion }) {
  const [showRegisterDeleted, setShowRegisterDeleted] = useState(false);

  // Función para manejar el clic en "Eliminar registro"
  const handleDeleteClick = () => {
    eliminarAccion(); // Ejecuta la acción de eliminar
    setShowRegisterDeleted(true); // Muestra el popup de "Registro eliminado"
    console.log('HOLA');
  };

  if (!show && !showRegisterDeleted) {
    return null; // No mostrar el popup si `show` es false y no ha sido eliminado
  }

  return (
    <>
      {/* Mostrar el popup de eliminar solo si no se ha mostrado el popup de "Registro Eliminado" */}
      {!showRegisterDeleted && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="container-fluid">
              <div>
                <div className='popup-icon'>
                  <DeleteOutlinedIcon sx={{ fontSize: 40 }} /> {/* Aumentamos el tamaño del ícono */}
                </div>
                <h2 className="subtitle-font" style={{ paddingBottom: '4%' }}>¿Eliminar registro?</h2>
                <div className="paragraph-font popup-body">
                  <p>¿Deseas eliminar este registro?</p>
                  <p>La información se perderá permanentemente.</p>
                </div>
                <div className='row'>
                  <div className="popup-footer ">
                    <button className="button-opc2 button-font col-6" onClick={handleClose}>Cancelar</button>
                    <button className="button-warning button-font col-6" onClick={handleDeleteClick}>Eliminar registro</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup de Registro eliminado */}
      {showRegisterDeleted && (
        <RegisterDeleted handleClose={() => setShowRegisterDeleted(false)} />
      )}
    </>
  );
}

export default DeleteRegister;
