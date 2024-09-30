import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import './Sidebar.css'; // Asegúrate de agregar estilos si los necesitas

const Sidebar = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <div className='sidebar'>
      <div className='button-menu sidebar-button-font' style={{marginTop: '70%'}}>
          <div><Link to="/Dashboard"><DashboardOutlinedIcon /> Dashboard</Link></div>
          <div><Link to="/Properties"><HomeWorkOutlinedIcon /> Propiedades</Link></div>
          <div><Link to="/Inmobiliarias"><BusinessCenterOutlinedIcon /> Inmobiliarias</Link></div>
          <div><Link to="/Owners"><PeopleAltOutlinedIcon /> Propietarios</Link></div>
          <div><Link to="/Informes"><ArticleOutlinedIcon /> Informes</Link></div>
        </div>
        
        <div className="footer-button button-menu sidebar-button-font">
        <div><Link to="/"><LogoutOutlinedIcon /> Cerrar Sesión</Link></div>
        </div>


      
    </div>
  );
};

export default Sidebar;
