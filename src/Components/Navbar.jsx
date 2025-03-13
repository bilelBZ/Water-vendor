// src/components/Navbar.jsx
import React from 'react';
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom';
import homeIcon from "../assets/001-home.png";
import SimIcon from "../assets/002-calculator.png";
import servIcon from "../assets/srv.png";
import infoIcon from "../assets/infos.png";


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className='hoverable-btn'>
        <img src={homeIcon} alt="home-icon" />
        <Link to="/home"> Accueil</Link>
        </li>
        <li className='hoverable-btn'>
        <img src={servIcon} id="Icons" alt="home-icon" />
          Services
          <ul>
            <li>Water Saving</li>
            <li>Drinking Water</li>
            <li>Water Quality</li>
          </ul>
        </li>
        <li className='hoverable-btn'>
        <img src={infoIcon} id="Icons" alt="home-icon" />
          Informations & Conseils
          <ul>
            <li>Water Saving</li>
            <li>Drinking Water</li>
            <li>Water Quality</li>
          </ul>
        </li>
        <li className='hoverable-btn'>
        <img src={SimIcon} alt="home-icon" />
        <Link to="/simulator">Simulateur</Link>
        </li>
        <li >
            <button className='log-btn'>
        <Link to="/login">Login/register</Link>
            </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
