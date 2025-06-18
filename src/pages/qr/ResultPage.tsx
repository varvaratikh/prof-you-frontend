import { useParams } from "react-router-dom";
import { Back } from "assets/images/Back";
import './qr.scss';
import {useEffect, useState} from "react";
import axios from "axios";

export const ResultPage = () => {
    const { id } = useParams<{ id: string }>();
    const [photo, setPhoto] = useState<string | null>(null);
    const [prediction, setPrediction] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const saved = localStorage.getItem(id);
            if (saved) {
                const { photo, prediction } = JSON.parse(saved);
                setPhoto(photo);
                setPrediction(prediction);
            }
        }
    }, [id]);

    const profession = prediction ? prediction.replace('Рекомендуемая профессия: ', '') : 'Неизвестно';

    useEffect(() => {
        const fetchDescription = async () => {
            if (!profession || profession === "Неизвестно") return;

            try {
                const response = await axios.get(`http://localhost:8000/profession/${encodeURIComponent(profession)}`);
                setDescription(response.data.description);
            } catch (error) {
                console.error("Ошибка при получении описания профессии:", error);
                setDescription(null);
            }
        };

        fetchDescription();
    }, [profession]);

    return (
        <div>
            <div className="image">
                <Back />
            </div>
            <div className="logo">
                <span className="logo__wh">Proff</span> You
            </div>
            <div className="results_container">
                <p className="yours">Вы <span className="profes">{profession}</span>!</p>
                <h3 className="texts">
                    На основе вашего фото и результатов пройденного теста, наш ИИ предположил, что вы могли бы стать{' '}
                    <span className="text_greens">
                        превосходным {profession}<span className="text_greens">'ом.</span>
                    </span>
                    {description && (
                        <p>{description}</p>
                    )}
                </h3>
            </div>
        </div>
    );
};
