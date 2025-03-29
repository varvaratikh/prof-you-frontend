import React, { useState, useEffect } from 'react';

// @ts-ignore
import example from '../../assets/images/pasha.jpg';

import './compliment.scss';

interface ComplimentTextProps {
    messages: string[];
    interval?: number;
}

export const ComplimentText: React.FC<ComplimentTextProps> = ({ messages, interval = 2000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, interval);

        return () => clearInterval(timer);
    }, [messages, interval]);

    return (
        <div className="cube-container">

            <img className="pasha_photo" src={example}/>

            <div className="cube-text">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`text-item ${index === currentIndex ? 'active' : ''}`}
                    >
                        {message}
                    </div>
                ))}
            </div>
        </div>
    );
};
