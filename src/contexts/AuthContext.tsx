import { createContext, ReactNode, useState } from "react";

import { UserLogin } from "../models/UserLogin";
import { login } from "../services/Service";

interface AuthContextProps {
    user: UserLogin | undefined;
    handleLogout(): void;
    handleLogin(email: string, password: string): Promise<void>;
    isLoading: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);
export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserLogin>({
        id: 0,
        name: '',
        avatar: '',
        password: '',
        email: '',
        role: '',
        token: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(email: string, password: string) {
        setIsLoading(true);
        try {
            await login('/login', email, password)
            alert('Login realizado com sucesso!');
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            alert('Erro ao realizar login!');
            setIsLoading(false);
        }
    }

    function handleLogout() {
        setUser({
            id: 0,
            name: '',
            avatar: '',
            password: '',
            email: '',
            role: '',
            token: '',
        });
    }

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );  
}