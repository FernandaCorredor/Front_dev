import React from 'react';
import './Dashboard-Styles.css'
import CardsContainer from './CardsContainer'
import TableDataPreview from './Table-Data-Preview'

function Dashboard() {
  return (
    <div id='Dashboard' className='pages-margin'>
      <h1 className='dashboard-title'>Dashboard</h1>
      <CardsContainer />
      <TableDataPreview />
    </div>
  );
}

export default Dashboard;
