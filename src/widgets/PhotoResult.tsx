import '../pages/qr/qr.scss'
interface PhotoResultProps {
    photo: string | null;
}

export const PhotoResult: React.FC<PhotoResultProps> = ({ photo }) => (
    <div className="profession">
        {photo ? (
            <img src={photo} alt="Снимок" className="photos" />
        ) : (
            <div className="photos" />
        )}
        <p className="your">Вы <span className="profess">DevOps</span>!</p>
        <h3 className="text">
            На основе вашего фото и результатов пройденного теста, наш ИИ предположил, что вы могли бы стать{' '}
            <span className="text_green">превосходным DevOps’ом</span>
        </h3>
    </div>
);