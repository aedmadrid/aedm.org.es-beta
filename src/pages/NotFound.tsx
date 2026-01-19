import React, { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NotionPage from "../components/NotionPage";
import { Botón } from "../components/Botón";

const NotFound: React.FC = () => {
  const location = useLocation();

  const pageId = useMemo(() => {
    const segments = location.pathname.split("/").filter(Boolean);
    // Support routes like /id/<pageId> and /id/<pageId>/...
    if (segments[0] === "id" && segments[1]) {
      return segments[1];
    }
    return null;
  }, [location.pathname]);

  useEffect(() => {
    if (!pageId) document.title = "aedm";
  }, [pageId]);

  if (pageId) {
    // If the URL is /id/<pageId> render the NotionPage component
    return <NotionPage pageId={pageId} />;
  }

  // Otherwise show a standard 404 page
  return (
    <main>
      <h1>Error 404</h1>
      <p>Lo sentimos, la página que buscas no se ha encontrado.</p>
      <Botón texto="Ir a la página de inicio" enlace="/" />
    </main>
  );
};

export default NotFound;
