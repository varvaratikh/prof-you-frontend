import React, { useRef, useEffect, useState } from 'react';
import './ MainCard.scss';
import {Back} from "../../images/Back";

const MainCard: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [photo, setPhoto] = useState<string | null>(null);

    useEffect(() => {
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

        startCamera();
    }, []);


    const takePhoto = () => {
        if (canvasRef.current && videoRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                canvasRef.current.width = videoRef.current.videoWidth;
                canvasRef.current.height = videoRef.current.videoHeight;
                context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
                const imageData = canvasRef.current.toDataURL('image/png');
                setPhoto(imageData);
            }
        }
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
                            <button onClick={takePhoto} className="button_photo">Сфотографироваться</button>
                        </div>
                    ) : (
                        <div>
                            <img src={photo} alt="Снимок" className="image-section__photo" />
                            <button onClick={() => setPhoto(null)} className="button_photo">Снять ещё</button>
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
                </div>
                <button className="button button-ready">ГОТОВО!</button>
            </div>
        </div>
    );
};

export default MainCard;