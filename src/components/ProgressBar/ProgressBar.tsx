import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import './progress.scss';

interface ProgressBarProps {
    duration?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ duration = 10 }) => {
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = 100;
        const step = 100 / (duration * 1000 / interval);

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    navigate('/qr');
                    return 100;
                }
                return prev + step;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [duration]);

    return (
        <div className="progress-container">
            <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
            >
                {Math.round(progress)}%
            </div>
        </div>
    );
};
