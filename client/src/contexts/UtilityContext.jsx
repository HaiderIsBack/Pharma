import { useState, useEffect, createContext } from "react";

const UtilityContext = createContext();

export const UtilityContextProvider = ({ children }) => {
    const [firstTimeVisit, setFirstTimeVisit] = useState(true);
    return (
        <UtilityContext.Provider value={{firstTimeVisit, setFirstTimeVisit}}>
            {children}
        </UtilityContext.Provider>
    );
}

export default UtilityContext;