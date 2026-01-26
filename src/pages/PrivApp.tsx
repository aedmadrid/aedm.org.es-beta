import { useTitle } from "../hooks/useTitle";

const PageTitle = "Política de Privacidad de la ASO.app";

export default function PrivApp() {
  useTitle(PageTitle);

  return (
    <main>
      <h1>Política de Privacidad de la ASO.app</h1>
      <p>
        La ASO.app, a fecha de 26 de enero de 2026, no recoge ni almacena datos
        personales de sus usuarios.
      </p>
    </main>
  );
}
