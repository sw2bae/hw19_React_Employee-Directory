import React, { createContext, useContext } from "react";

const UserModel = {
    image: '',
    name: '',
    phone: '',
    email: '',
    DOB: ''
};

const UserContext = createContext(UserModel);

export function UserProvider({ children, value }) {
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export function useUserContext() {
    return useContext(UserContext);
};

export default UserModel;


