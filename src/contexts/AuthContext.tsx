import { createContext, useState, useEffect } from 'react';
import { IUser } from '../interfaces/User';
import { api } from '../service/Service';
import { useLocation } from 'react-router-dom';
import { storageService } from '../service/Storage';

export interface IAuthContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

interface AuthContextProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as IAuthContext);

const AuthContextProvider = ({children}: AuthContextProvider) => {
  const [user, setUser] = useState<IUser | null>(null);

  const handleLogin = async (email: string, password: string) => {
  
    const response = await api.post("/login", {
      email: email,
      password: password,
    });

    console.log(response);

    
  }


  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;