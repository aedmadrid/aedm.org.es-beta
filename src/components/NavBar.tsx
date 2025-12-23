import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const activeStyle = {
    color: "#36e452",
    textDecoration: "underline",
  } as React.CSSProperties;

  const navigate = useNavigate();
  function homeUrl() {
    navigate("/");
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: 80,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",

        backgroundColor: "rgba(253, 253, 253, 0.462)",
        backdropFilter: "blur(12px)",
      }}
    >
      <img
        src="/adem-logo.svg"
        alt="AEDM Logo"
        style={{ height: 40, marginTop: 10, cursor: "pointer" }}
        onClick={homeUrl}
      />
      <nav
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          margin: 16,
        }}
        aria-label="Navegación principal"
      >
        <NavLink
          to="/"
          end
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/reclama"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Expone-Solicita
        </NavLink>
        <NavLink
          to="/actividades"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Actividades
        </NavLink>
        <NavLink
          to="/proyectos"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Proyectos
        </NavLink>
        <NavLink
          to="/app"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          App
        </NavLink>
        <NavLink
          to="/contacto"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contacto
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
