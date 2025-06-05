import '../pages/qr/qr.scss'
import {JSX} from "react";


interface PhotoResultProps {
    photo: string | null;
    prediction: string | null;
}

export const PhotoResult: ({photo, prediction}: { photo: any; prediction: any }) => JSX.Element = ({ photo, prediction }) => {
    const profession = prediction ? prediction.replace('Рекомендуемая профессия: ', '') : 'Неизвестно';

    return (
        <div className="profession">
            {photo ? (
                <img src={photo} alt="Снимок" className="photos" />
            ) : (
                <div className="photos" />
            )}
            <p className="your">Вы <span className="profess">{profession}</span>!</p>
            <h3 className="text">
                На основе вашего фото и результатов пройденного теста, наш ИИ предположил, что вы могли бы стать{' '}
                <span className="text_green">превосходным {profession}</span>
                <span className="text_green">'ом</span>
            </h3>
        </div>
    );
};