import React from "react";
import { GranBotón } from "../components/GranBotón";
import { useTitle } from "../hooks/useTitle";

export const PageTitle = "ASÓciate";

export const Asocia: React.FC = () => {
  useTitle(PageTitle);
  return (
    <main>
      <h1>{PageTitle}</h1>

      <h2>
        ‘La (aso)ciación de estudiantes de diseño de madrid o aedm tiene como
        objetivo crear conexiones entre la escuela y el alumnado.’
      </h2>
      <GranBotón
        texto="Inscribirme"
        icono="arrow_forward"
        enlace="https://aedm.notion.site/20f76f0f98e280deb2e7d011cc1d39e9"
      />
      <p>
        Creamos eventos, encuentros, asesoramos a los alumnos, colaboramos con
        miembros del consejo escolar para llevar las preocupaciones e
        inquietudes de los alumnos a la dirección. Unimos lazos con otras
        escuelas, simplificamos y explicamos trámites y más.
      </p>
      <b>Si quieres tomar parte en todo en todo esto, únete a la aso ahora.</b>
      <hr
        style={{
          border: 0,
          height: 2,
          background: "#36e452",
          margin: 0,
          marginTop: 12,
          marginBottom: 12,
        }}
      />
      <i>
        La cuota son 5€ al año (antes 10) para mantener algunas cosas de las que
        tenemos. Los alumnos de primero no pagan nada.
      </i>
    </main>
  );
};
