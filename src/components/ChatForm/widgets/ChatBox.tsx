import {Send} from "lucide-react";
import {useState} from "react";
import '../chatForm.scss'

export const ChatBox = () => {

    const botAvatar = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcakeshop.com.ua%2Fru%2Fproduct%2Fvafelnaya-kartinka-gubka-bob-2%2F&psig=AOvVaw3TqMH6JFAEv-dY4wuGmDOl&ust=1738754113258000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiPkfzxqYsDFQAAAAAdAAAAABAE";
    const userAvatar = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fvaysyper%2F&psig=AOvVaw2e1ynFTKTsdHJoaNvAdlne&ust=1738754135588000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjgwZfyqYsDFQAAAAAdAAAAABAJ";

    const [messages, setMessages] = useState([
        { id: 1, text: 'Привет! Меня зовут Михаил :) Я прошу тебя ответить на пару вопросов.', sender: 'bot', avatar: botAvatar },
        { id: 2, text: 'На сколько ты оцениваешь свои знания по математике шкале от 1 до 10', sender: 'bot', avatar: botAvatar },
        { id: 3, text: '100', sender: 'user', avatar: userAvatar },
    ]);

    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;

        setMessages([...messages, { id: messages.length + 1, text: inputValue, sender: 'user', avatar: userAvatar }]);
        setInputValue('');
    };

    return(
        <div className="chat-box">
            {messages.map(msg => (
                <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
                    {msg.sender === 'bot' && <img src={msg.avatar} alt="bot" className="avatar" />}
                    <div className={`message ${msg.sender === 'bot' ? 'received' : 'sent'}`}>{msg.text}</div>
                    {msg.sender === 'user' && <img src={msg.avatar} alt="user" className="avatar" />}
                </div>
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