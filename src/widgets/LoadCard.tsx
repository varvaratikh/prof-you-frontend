import {usePhoto} from "../context/PhotoContext";
import {ProgressBar} from "../components/ProgressBar/ProgressBar";
import {ComplimentText} from "../components/Сompliment/ComplimentText";


import '../pages/load/load.scss';

export const LoadCard = () => {
    const { photo } = usePhoto();

    return (
        <div className="container">
            <div className="content-wrapper">
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
                    <ProgressBar duration={10} />

                    <div style={{ padding: '20px', height: '50px' }}>
                        <ComplimentText messages={['У тебя очень красивые очки!', 'Ты сегодня прекрасно выглядишь!', 'Твоя улыбка заряжает!']} />
                    </div>

                </div>
            </div>
        </div>
    )
}