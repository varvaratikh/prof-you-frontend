import React, { useRef, useEffect } from 'react';
import './ MainCard.scss';
import { Back } from "../../images/Back";
import { useNavigate } from "react-router-dom";
import { usePhoto } from "../../context/PhotoContext";
import {Button} from "../button/Button";
import {sendPhotoToBackend} from "../../api/mainCard.api";

export const MainCard = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const navigate = useNavigate();
    const { photo, setPhoto, prediction, setPrediction } = usePhoto();

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            } else {
                console.error("Видео элемент не найден.");
            }
        } catch (error) {
            console.error("Ошибка доступа к камере: ", error);
        }
    };

    useEffect(() => {
        startCamera();

        return () => {
            if (videoRef.current?.srcObject) {
                const stream = videoRef.current.srcObject as MediaStream;
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const takePhoto = async () => {
        if (canvasRef.current && videoRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                canvasRef.current.width = videoRef.current.videoWidth;
                canvasRef.current.height = videoRef.current.videoHeight;
                context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
                const imageData = canvasRef.current.toDataURL('image/png');
                setPhoto(imageData);

                try {
                    const predictionResult = await sendPhotoToBackend(imageData);
                    setPrediction(predictionResult);
                } catch (error) {
                    console.error("Ошибка при отправке фото:", error);
                    setPrediction("Ошибка определения профессии");
                }
            }
        }
    };

    const handleReadyClick = () => {
        navigate('/chat');
    };

    const handleRetakeClick = () => {
        setPhoto(null);
        startCamera();
    };

    return (
        <div>
            <div className="image">
                <Back />
            </div>
            <div className="logo">
                <span className="logo__wh">
                    Proff
                </span>
                You
            </div>
            <div className="main-card">
                <div className="image-section">
                    {!photo ? (
                        <div>
                            <video ref={videoRef} autoPlay className="image-section__video"></video>
                            <Button text="Сфотографироваться" onClick={takePhoto} className="button_photo"/>
                        </div>
                    ) : (
                        <div>
                            <img src={photo} alt="Снимок" className="image-section__photo" />
                            <Button text="Снять ещё" onClick={handleRetakeClick} className="button_photo_2"/>

                        </div>
                    )}
                    <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
                </div>

                <div className="text-section">
                    <h2 className="text-section__title">УЛЫБНИТЕСЬ ПОШИРЕ!</h2>
                    <p className="text-section__description">
                        Мы сфотографируем вас, чтобы определить вашу профессию :)
                    </p>
                    <p className="text-section__note">
                        *Ваше фото не будет сохранено или использовано в каких-либо целях. Все данные конфиденциальны и автоматически удаляются после генерации ответа.
                    </p>
                    <Button text="ГОТОВО!" onClick={handleReadyClick} className="button button-ready" />
                </div>
            </div>
        </div>
    );
};