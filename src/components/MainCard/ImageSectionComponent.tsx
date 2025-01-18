import React, { useRef, useEffect, useState } from 'react';
import './ ImageSection.scss';

const ImageSectionComponent: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [photo, setPhoto] = useState<string | null>(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
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
                // Устанавливаем размеры холста под видео
                canvasRef.current.width = videoRef.current.videoWidth;
                canvasRef.current.height = videoRef.current.videoHeight;

                // Рисуем текущий кадр видео на холст
                context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

                // Получаем изображение в формате data URL
                const imageData = canvasRef.current.toDataURL('image/png');
                setPhoto(imageData);
            }
        }
    };

    return (
        <div className="image-section">
            {!photo ? (
                <div>
                    <video
                        ref={videoRef}
                        autoPlay
                        className="image-section__video"
                    ></video>
                    <button onClick={takePhoto} className="image-section__button">
                        Сфотографироваться
                    </button>
                </div>
            ) : (
                <div>
                    <img src={photo} alt="Снимок" className="image-section__photo" />
                    <button onClick={() => setPhoto(null)} className="image-section__button">
                        Снять ещё
                    </button>
                </div>
            )}
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        </div>
    );
};

export default ImageSectionComponent;
