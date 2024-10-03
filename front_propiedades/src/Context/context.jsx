import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const ModeContext = createContext();

// Hook para usar el contexto
export const useMode = () => {
  return useContext(ModeContext);
};

// Proveedor de modo
export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState('view'); // Valor inicial del modo es "view"

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'view' ? 'edit' : 'view'));
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};
