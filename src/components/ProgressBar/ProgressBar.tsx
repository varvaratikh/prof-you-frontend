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
                const next = prev + step;
                if (next >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return next;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [duration]);

    useEffect(() => {
        if (progress >= 100) {
            navigate('/qr');
        }
    }, [progress]);

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
