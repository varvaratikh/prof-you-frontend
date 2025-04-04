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
                    <ProgressBar duration={20} />

                    <div style={{ padding: '20px', height: '50px' }}>
                        <ComplimentText messages={
                            [
                                'Ты сегодня прекрасно выглядишь!',
                                'Твоя улыбка заряжает!',
                                'Ты сегодня прекрасно выглядишь!',
                                'Твоя улыбка заряжает!',
                                'У тебя потрясающее чувство стиля!',
                                'Твои глаза как космос — можно утонуть!',
                                'Ты излучаешь невероятную энергетику!',
                                'Ну всё, фотографы могут расходиться — идеал уже снят.',
                                'Ну не фото, а Pinterest вживую!',
                                'Даже фильтры отдыхают рядом с тобой.',
                                'Тут фото, а где обложка журнала?',
                                'Это не просто фото — это эстетика на максималках.',
                                'Красота такая, что даже камера постеснялась немного.',
                            ]} />
                    </div>

                </div>
            </div>
        </div>
    )
}