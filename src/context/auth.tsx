import React from 'react';
import { User, getAuth, onAuthStateChanged} from "firebase/auth";
import { FC, createContext, useEffect, useState } from "react";


// create context

interface AuthContextType {
    user: User | null,
    isLoading: boolean
}
export const AuthContext = createContext<AuthContextType>({
    user: null, 
    isLoading: false
})

// create provider

interface AuthProviderProps {
    children: React.ReactElement;
}
export const AuthProvider : FC<AuthProviderProps> = ({children}) => {
    const auth = getAuth();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(false)
        })
        return unsubscribe
    }, [auth])

    const value = {
        user,
        isLoading
    };

    return <AuthContext.Provider value={value}>{!isLoading && children}</AuthContext.Provider>
}
