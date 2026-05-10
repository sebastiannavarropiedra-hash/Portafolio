import React from "react";

function ContactContent() {
    return (
        <div className="ContactContent">
            <h1>Contacto</h1>
            <p>Si deseas ponerte en contacto conmigo, puedes enviarme un correo electrónico a <a href="mailto:  
            " target="_blank" rel="noopener noreferrer">tu correo electrónico</a> o seguirme en mis redes sociales:</p>
            <ul>
                <li><a href="https://www.linkedin.com/in/tu-perfil-linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/tu-perfil-github" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://twitter.com/tu-perfil-twitter" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
        </div>
    );
}

export default ContactContent;