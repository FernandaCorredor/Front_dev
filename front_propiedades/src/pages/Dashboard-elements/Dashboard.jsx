import React from 'react';
import './Dashboard-Styles.css'
import '../General-Styles.css'
import CardsContainer from './CardsContainer'
import TableDataPreview from './Table-Data-Preview'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

function Dashboard() {
  return (
    <div id='Dashboard' className='pages-margin'>
    {/* Bootstrap Container */}
      <div className="container-fluid">
        <div className='row'>
          <div className="col-1"></div>
            <div className="col-2">
              <h1 className='title-font'>Dashboard</h1>
            </div>
            <div className='col-9'></div> 
        </div>

        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'>
            <CardsContainer />
          </div>
          <div className='col-1'></div>
        </div>

        <div className='row'>
          <div className="col-1"></div>
            <div className="col-3">
              <h3 className='subtitle-font'>Registros recientes</h3>
            </div>
            <div className='col-8'></div> 
        </div>

        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'>
            <TableDataPreview />
          </div>
          <div className='col-1'></div>
        </div>

      </div>  
    </div>

  );
}

export default Dashboard;
