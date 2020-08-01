import React, { createContext, useContext } from "react";

const BtnContext = createContext();

export function BtnProvider({ children, value }) {
    return <BtnContext.Provider value={value}>{children}</BtnContext.Provider>;
};
export function useBtnContext() {
    return useContext(BtnContext);
};

