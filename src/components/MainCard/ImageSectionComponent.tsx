import React from 'react';
import './ImageSection.scss';

const ImageSection: React.FC = () => {
    return (
        <div className="image-section">
            <img
                src="cat-image-url"
                alt="Smiling Cat"
                className="image-section__image"
            />
        </div>
    );
};

export default ImageSection;