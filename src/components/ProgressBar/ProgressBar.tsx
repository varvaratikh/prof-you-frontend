import { useState } from "react";
import './progress.scss';

interface ProgressBarProps {
    progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <div className="progress-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}>
                {progress}%
            </div>
        </div>
    );
};

export const ChatWithProgress = () => {
    const [progress, setProgress] = useState(0);
    const totalQuestions = 10;

    const handleAnswerSubmit = () => {
        setProgress((prev) => Math.min(prev + 100 / totalQuestions, 100));
    };

    return (
        <div>
            <ProgressBar progress={progress} />
            <button onClick={handleAnswerSubmit}>Ответить</button>
        </div>
    );
};