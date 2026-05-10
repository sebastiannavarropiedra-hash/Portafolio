import React from "react";
import '../Styles/Footer.css';
import { NavLink } from "react-router-dom";


function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="container-fluid seccionfooter text-center py-3">
        <div>

          {/* Social Media Icons */}
          <div className="redes-sociales mb-3">
            <NavLink to="/" className="icono">
              <i className="fab fa-facebook"></i>
            </NavLink>

            <NavLink to="/" className="icono">
              <i className="fab fa-instagram"></i>
            </NavLink>

            <NavLink to="/" className="icono">
              <i className="fab fa-linkedin"></i>
            </NavLink>
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