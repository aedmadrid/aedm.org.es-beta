import React from "react";
import { Botón } from "../components/Botón";

export const Contacto: React.FC = () => {
  return (
    <main>
      <h1>Contacto</h1>

      <p>¿Dudas? ¿Sugerencias? No dudes en contactarnos ;-)</p>

      <Botón
        texto="Correo electrónico"
        enlace="mailto:aadm@esdmadrid.es"
      ></Botón>
      <Botón
        texto="Instagram"
        enlace="https://www.instagram.com/aso.esd/"
      ></Botón>
    </main>
  );
};
