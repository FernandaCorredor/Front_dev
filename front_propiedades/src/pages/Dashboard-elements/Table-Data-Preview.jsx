import React from 'react';
import './Dashboard-Styles.css'

const TableDataPreview = () => {
  return (
    <div>
        <h3 className='pages-subtitle'>Registros recientes</h3>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
        </table>
    </div>
  );
}

export default TableDataPreview;
