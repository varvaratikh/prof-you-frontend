import './chatForm.scss';
import {usePhoto} from "../../context/PhotoContext";
import {ProgressBar} from "../ProgressBar/ProgressBar";
import {ChatBox} from "./widgets/ChatBox";

export const ChatForm = () => {
    const { photo } = usePhoto();

    return (
        <div className="container">
            <p className="test_text">Пройдите небольшой тест, пока ИИ анализирует ваше фото!</p>
            <div className="content-wrapper">
                <ChatBox/>
                <div className="photo-analysis">
                    {photo ? (
                        <img src={photo} alt="Снимок" className="photo" />
                    ) : (
                        <div className="photo" />
                    )}
                    <ProgressBar progress={90}/>
                </div>
            </div>
            <div className="test-footer">
                <p className="testSm_text">
                    *Данные прохождения теста не будут сохранены или использованы в
                    каких-либо целях. Все данные конфиденциальны и автоматически
                    удаляются после генерации ответа.
                </p>
                <button className="ready-btn">ГОТОВО!</button>
            </div>
        </div>
    );
};
