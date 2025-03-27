export interface PhotoContextType {
    photo: string | null;
    setPhoto: (photo: string | null) => void;
    prediction: string | null;
    setPrediction: (prediction: string | null) => void;
}