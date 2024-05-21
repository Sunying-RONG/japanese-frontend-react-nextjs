"use client"
import { createContext, FC, useState } from 'react';

export interface IKanaSelect {
    h: boolean;
    k: boolean;
    p: boolean;
}
export type KanaSelectContextType = {
    showOrHide: IKanaSelect;
    updateSelect: (event: any) => void;
}

const defaultSelect = {
    h:true, 
    k:true, 
    p:true
}

export const KanaSelectContext = createContext<KanaSelectContextType | null>(null);

export const KanaSelectProvider: FC<{children: React.ReactNode}> = ({children}) => {
    const [showOrHide, setShowOrHide] = useState<IKanaSelect>(defaultSelect);
    
    const updateSelect = (event: any) => {
        const name: keyof typeof showOrHide = event.target.name;
        setShowOrHide(prev => ({
            ...prev,
            [name]: !prev[name]
        }))
    }

    return (
        <KanaSelectContext.Provider
            value={{
                showOrHide,
                updateSelect,
            }}
        >
            {children}
        </KanaSelectContext.Provider>
    );
}
