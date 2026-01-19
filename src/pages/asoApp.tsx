import React from "react";
import { useTitle } from "../hooks/useTitle";

export const ASOapp: React.FC = () => {
  useTitle("ASO.app");

  return (
    <main>
      <h1>ASO.app</h1>
      <p>La ASO.app se está reescribiendo.</p>
    </main>
  );
};
