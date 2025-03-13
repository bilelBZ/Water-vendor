// Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>À Propos de Nous</h4>
          <p>Votre description de site web va ici. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="footer-section">
          <h4>Coordonnées</h4>
          <p>Email : contact@example.com</p>
          <p>Téléphone : (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Suivez-nous</h4>
          <p>Restez connecté sur les réseaux sociaux :</p>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Votre Nom de Site Web. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
