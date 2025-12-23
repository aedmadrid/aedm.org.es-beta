import React from "react";
import { Botón } from "../components/Botón";

const NotFound: React.FC = () => {
  return (
    <main>
      <h1>Error 404</h1>
      <p>Lo sentimos, la página que buscas no se ha encontrado.</p>
      <Botón texto="Ir a la página de inicio" enlace="/" />
    </main>
  );
};

export default NotFound;
