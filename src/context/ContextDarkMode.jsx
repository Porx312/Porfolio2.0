import React, { createContext, useState } from 'react';

// Crea el contexto
export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    // El valor del contexto incluye el estado y la función para cambiarlo
    const value = { isDark, setIsDark };

    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;
