import './chatForm.scss';
import {usePhoto} from "../../context/PhotoContext";
import {ProgressBar} from "../ProgressBar/ProgressBar";
import {ChatBox} from "./widgets/ChatBox";
import {useNavigate} from "react-router-dom";
import {Button} from "../button/Button";

export const ChatForm = () => {
    const { photo } = usePhoto();
    const navigate = useNavigate();

    const handleReadyClick = () => {
        navigate('/qr');
    };

    return (
        <div className="container">
            <p className="test_text">Пройдите небольшой тест, пока ИИ анализирует ваше фото!</p>
            <div className="content-wrapper">
                <ChatBox/>
                <div className="photo-analysis">
                    <div className="photo-container">
                        {photo ? (
                            <>
                                <img src={photo} alt="Снимок" className="photo" />
                                <div className="loader-overlay">
                                    <div className="loader"></div>
                                </div>
                            </>
                        ) : (
                            <div className="photo" />
                        )}
                    </div>
                    <ProgressBar progress={50}/>
                </div>
            </div>
            <div className="test-footer">
                <p className="testSm_text">
                    *Данные прохождения теста не будут сохранены или использованы в
                    каких-либо целях. Все данные конфиденциальны и автоматически
                    удаляются после генерации ответа.
                </p>
                <Button text="ГОТОВО!" onClick={handleReadyClick} className="ready-btn" />
            </div>
        </div>
    );
};
