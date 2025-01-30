import './chatForm.scss';
import { useState } from 'react';
import { Send } from 'lucide-react';

export const ChatForm = () => {
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
        <div className="chat-container">
            <p className="test_text">Пройдите небольшой тест, пока ИИ анализирует ваше фото!</p>
            <div className="chat-wrapper">
                <div className="chat-box">
                    {messages.map(msg => (
                        <div key={msg.id} className={`message ${msg.sender}`}>{msg.text}</div>
                    ))}
                    <div className="input-container">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Write a message"
                        />
                        <button onClick={handleSend}><Send size={20} /></button>
                    </div>
                </div>
                <div className="photo-analysis">
                    <div className="photo" />
                    <div className="progress">10%</div>
                </div>
            </div>
            <p className="testSm_text">*Данные прохождения теста не будут сохранены или использованы в каких-либо целях. Все данные конфиденциальны и автоматически удаляются после генерации ответа.</p>
            <button className="ready-btn">ГОТОВО!</button>
        </div>
    );
};
