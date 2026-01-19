import React from "react";
import { Botón } from "../components/Botón";
import { useTitle } from "../hooks/useTitle";

export const PageTitle = "Contacto";

export const Contacto: React.FC = () => {
  useTitle(PageTitle);
  return (
    <main>
      <h1>{PageTitle}</h1>

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
