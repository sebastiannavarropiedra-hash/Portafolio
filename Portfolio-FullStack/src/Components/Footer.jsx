import React from "react";
import '../Styles/Footer.css';
function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="container-fluid seccionfooter text-center py-3">
        <div>

          {/* Social Media Icons */}
          <div className="redes-sociales mb-3">
            <a href="#" className="icono">
              <i className="fab fa-facebook"></i>
            </a>

            <a href="#" className="icono">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="#" className="icono">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

          {/* Horizontal Line */}
          <hr className="linea-footer" />

          {/* Copyright */}
          <p>Todos los derechos reservados 2026</p>

        </div>
      </footer>
    </>
  );
}

export default Footer;