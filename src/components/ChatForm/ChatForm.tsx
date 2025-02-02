import './chatForm.scss';
import { useState } from 'react';
import { Send } from 'lucide-react';
import {usePhoto} from "../../context/PhotoContext";
import {ProgressBar} from "../ProgressBar/ProgressBar";

export const ChatForm = () => {
    const { photo } = usePhoto();

    const [messages, setMessages] = useState([
        { id: 1, text: 'Привет! Меня зовут Михаил :) Я прошу тебя ответить на пару вопросов.', sender: 'bot' },
        { id: 2, text: 'На сколько ты оцениваешь свои знания по математике шкале от 1 до 10', sender: 'bot' },
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;

        setMessages([...messages, { id: messages.length + 1, text: inputValue, sender: 'user' }]);
        setInputValue('');
    };

    return (
        <div className="container">
            <p className="test_text">Пройдите небольшой тест, пока ИИ анализирует ваше фото!</p>
            <div className="content-wrapper">
                <div className="chat-box">
                    {messages.map(msg => (
                        <div key={msg.id} className={`message ${msg.sender === 'bot' ? 'received' : 'sent'}`}>{msg.text}</div>
                    ))}
                    <div className="input-container">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Write a message"
                            className="chat-input"
                        />
                        <button onClick={handleSend}><Send size={20} /></button>
                    </div>
                </div>
                <div className="photo-analysis">
                    {photo ? (
                        <img src={photo} alt="Снимок" className="photo" />
                    ) : (
                        <div className="photo" />
                    )}
                    <ProgressBar progress={10}/>
                </div>
            </div>
            <div className="test-footer">
                <p className="testSm_text">*Данные прохождения теста не будут сохранены или использованы в каких-либо целях. Все данные конфиденциальны и автоматически удаляются после генерации ответа.</p>
                <button className="ready-btn">ГОТОВО!</button>
            </div>
        </div>
    );
};
