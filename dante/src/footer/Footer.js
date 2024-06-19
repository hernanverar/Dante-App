import React from 'react';
import "../styles/footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className="footer">
      <h1> Siguenos aqui para nuestros eventos futuros!</h1>
      <div className="socialMedia"> 
        <a href="https://www.facebook.com/santillanmiguelanjel" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
      </div>
      <p>&copy; 2024 Hernanverar.com</p>
    </div>
  )
}

export { Footer };