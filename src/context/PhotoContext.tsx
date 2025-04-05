import React, {createContext, useState, useContext, ReactNode} from 'react';
import {PhotoContextType} from "../models/photo";

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider = ({ children }: { children: ReactNode }) => {
    const [photo, setPhoto] = useState<string | null>(null);
    const [prediction, setPrediction] = useState<string | null>(null);
    const [gender, setGender] = useState<string | null>(null);

    return (
        <PhotoContext.Provider value={{ photo, setPhoto, prediction, setPrediction, gender, setGender }}>
            {children}
        </PhotoContext.Provider>
    );
};


export const usePhoto = () => {
    const context = useContext(PhotoContext);
    if (!context) {
        throw new Error('usePhoto must be used within a PhotoProvider');
    }
    return context;
};