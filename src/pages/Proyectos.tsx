import React, { useEffect, useState } from "react";
import { HClick } from "../components/HClick";
import { useTitle } from "../hooks/useTitle";

type Project = {
  pageId: string;
  name: string;
};

export const PageTitle = "Proyectos";

export const Proyectos: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useTitle(PageTitle);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.aedm.org.es/PROYECTOS_DB.json", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then((data: Project[]) => {
        setProjects(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Error fetching data:", err);
          setError("No se pudieron cargar los proyectos.");
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <main>
      <h1>{PageTitle}</h1>

      {error && <p>{error}</p>}

      {projects.map((project) => (
        <HClick
          key={project.pageId}
          texto={project.name}
          enlace={`/id/${project.pageId}`}
          icono="arrow_forward"
        />
      ))}
    </main>
  );
};
