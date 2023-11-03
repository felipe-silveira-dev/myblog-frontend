import React, { useState, createContext, ReactNode } from "react";

interface IUserContextType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<IUserContextType>({
    name: "",
    setName: () => {},
});

interface IUserProviderProps {
    children: ReactNode;
}

function UserProvider({ children }: IUserProviderProps) {
    const [name, setName] = useState<string>("");

    return (
        <UserContext.Provider value={{ name, setName }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;