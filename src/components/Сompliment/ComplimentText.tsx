import React, { useEffect, useState } from 'react';
// @ts-ignore
import image from '../../assets/images/image.png';
import './compliment.scss';
import {usePhoto} from "../../context/PhotoContext";
import {complimentsForMen, complimentsForWomen} from "../../constants/compliment";

export const ComplimentCube = () => {
    const { gender } = usePhoto();
    const compliments = gender === 'Man' ? complimentsForMen : complimentsForWomen;

    const [currentCompliment, setCurrentCompliment] = useState('');
    const [previousIndex, setPreviousIndex] = useState<number | null>(null);
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const getRandomIndex = () => {
            let index;
            do {
                index = Math.floor(Math.random() * compliments.length);
            } while (index === previousIndex);
            return index;
        };

        const updateCompliment = () => {
            const newIndex = getRandomIndex();
            setCurrentCompliment(compliments[newIndex]);
            setPreviousIndex(newIndex);
            setAnimationKey(prev => prev + 1);
        };

        const interval = setInterval(updateCompliment, 2500);

        updateCompliment();

        return () => clearInterval(interval);
    }, [gender]);

    return (
        <div className="cube-container">

            <img className="photo-compliment" src={image}/>

            <div key={animationKey} className="cube-text">
                {currentCompliment}
            </div>
        </div>
    );
}
