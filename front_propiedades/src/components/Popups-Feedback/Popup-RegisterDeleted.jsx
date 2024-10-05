import React from 'react';
import './Popup-Styles.css'; // Tu archivo de estilos personalizado
import '../../pages/General-Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterDeleted({ handleClose }) {
    console.log('Registro eliminado');
    return (
      <div style={{ background: 'red', padding: '20px', width:'100%', color: 'white' }}>
        Registro eliminado correctamente
        <button onClick={handleClose}>Cerrar</button>
      </div>
    );
  }
  

export default RegisterDeleted;
