import React, { createContext, useState, useContext } from 'react';
import {PhotoContextType} from "../models/photo";

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [photo, setPhoto] = useState<string | null>(null);

    return (
        <PhotoContext.Provider value={{ photo, setPhoto }}>
            {children}
        </PhotoContext.Provider>
    );
};

export const usePhoto = (): PhotoContextType => {
    const context = useContext(PhotoContext);
    if (!context) {
        throw new Error('usePhoto must be used within a PhotoProvider');
    }
    return context;
};
