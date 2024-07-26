"use client"
const { createContext } = require("react");

export const Contex = createContext()

const ContexProvider = ({children}) => {
    const info = {
        user: "hello"
    }
    return(
        <Contex.Provider value={info}>
            {children}
        </Contex.Provider>
    );
};

export default ContexProvider; 