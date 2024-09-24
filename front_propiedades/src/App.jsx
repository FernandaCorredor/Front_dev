import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/Dashboard-elements/Dashboard';

import Properties from './pages/Properties-elements/Properties';
import PropertiesDetailes from './pages/Properties-elements/Properties-Detailes'; // Importa la página de detalles
import CreateProperties from './pages/Properties-elements/Create-Properties'; // Importa la página de detalles

import Inmobiliarias from './pages/Inmobiliairas-elements/Inmobiliarias';
import Propietarios from './pages/Owners-elements/Owners';
import Informes from './pages/Informes';

import Sidebar from './components/Menu/Sidebar';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <div className='row'>
        <div className='col-1'>
          <Sidebar />
        </div>
        
        <div className='col-11'>
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            
            {/* Properties Pages */}
            <Route path="/Properties" element={<Properties />} />
            <Route path="/Properties-Details/:id" element={<PropertiesDetailes />} /> {/* Ruta con parámetro dinámico */}
            <Route path="/Create-Properties" element={<CreateProperties />} /> {/* Ruta con parámetro dinámico */}

            <Route path="/Inmobiliarias" element={<Inmobiliarias />} />
            <Route path="/Propietarios" element={<Propietarios />} />
            <Route path="/Informes" element={<Informes />} />
          </Routes>
        </div>

        </div>
        
      </div>
    </Router>
  );
}

export default App;
