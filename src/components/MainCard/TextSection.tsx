import React from 'react';
import './TextSection.scss';

const TextSection: React.FC = () => {
    return (
        <div className="text-section">
            <h2 className="text-section__title">УЛЫБНИТЕСЬ ПОШИРЕ!</h2>
            <p className="text-section__description">
                Мы сфотографируем вас, чтобы определить вашу профессию :)
            </p>
            <p className="text-section__note">
                *Ваше фото не будет сохранено или использовано в каких-либо целях...
            </p>
        </div>
    );
};

export default TextSection;
