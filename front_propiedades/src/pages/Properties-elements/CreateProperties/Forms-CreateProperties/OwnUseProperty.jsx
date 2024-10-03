import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Properties-elements/Properties-Styles.css';
import '../Components-CP-Styles.css'
import '../../../../pages/General-Styles.css'

const OwnUsePropertyForm = () => {
  
    return (
      <div id='OwnUseProperty-Table' className='container-GI'>
        <div className='container-fluid'>
          <div className='subtitle-font forms-title'>Información - Uso propio</div>
          <div className='row-elements'>
            <div className='subheader-font'>Descripción</div>
            <textarea placeholder='Escriba aquí la descripción que necesite'></textarea>
          </div>

        </div>
        
      </div>
    );
  }
  
  export default OwnUsePropertyForm;