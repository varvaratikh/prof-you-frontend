import {Send} from "lucide-react";
import {useState} from "react";
import '../chatForm.scss'

export const ChatBox = () => {

    const [messages, setMessages] = useState([
        { id: 1, text: 'Привет! Меня зовут Михаил :) Я прошу тебя ответить на пару вопросов.', sender: 'bot' },
        { id: 2, text: 'На сколько ты оцениваешь свои знания по математике шкале от 1 до 10', sender: 'bot' },
        { id: 3, text: '100', sender: 'user' },

    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;

        setMessages([...messages, { id: messages.length + 1, text: inputValue, sender: 'user' }]);
        setInputValue('');
    };

    return(
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
    )
}