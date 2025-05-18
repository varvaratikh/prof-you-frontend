import { useParams } from "react-router-dom";
import { usePhoto } from "../../context/PhotoContext";
import { Back } from "assets/images/Back";
import './qr.scss';

export const ResultPage = () => {
    const { id } = useParams();
    const { prediction } = usePhoto();

    const profession = prediction ? prediction.replace('Рекомендуемая профессия: ', '') : 'Неизвестно';

    return (
        <div>
            <div className="image">
                <Back />
            </div>
            <div className="logo">
                <span className="logo__wh">Proff</span> You
            </div>
            <div className="result_container">
                <h1>Результаты по ID: {id}</h1>

                <p className="your">Вы <span className="profess">{profession}</span>!</p>
                <h3 className="text">
                    На основе вашего фото и результатов пройденного теста, наш ИИ предположил, что вы могли бы стать{' '}
                    <span className="text_green">превосходным {profession}</span>
                    <span className="text_green">'ом</span>
                </h3>
            </div>
        </div>
    );
};
