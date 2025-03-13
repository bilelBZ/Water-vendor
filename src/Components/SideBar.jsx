// components/Sidebar.jsx
import React from 'react';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <button className='btn-sideBar' ><Link to="/login">Je crée mon compte</Link></button>
        </li>
        <li>
          <button className='btn-sideBar'><Link to="/articles/article2">Je paye ma facture</Link></button>
        </li>
        <li>
          <button className='btn-sideBar'><Link to="/articles/article2">Je signale un probléme</Link></button>
        </li>
        <li>
          <button className='btn-sideBar'><Link to="/articles/article2">Contactez-nous</Link></button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
