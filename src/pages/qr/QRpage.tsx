import {Back} from "../../images/Back";
import {useNavigate} from "react-router-dom";

import './qr.scss'
import {usePhoto} from "../../context/PhotoContext";

export const QRpage = () => {
    const { photo } = usePhoto();
    const navigate = useNavigate();

    const handleEndClick = () => {
        navigate('/');
    };

    return(
        <div>
            <div className="image">
                <Back />
            </div>
            <div className="logo">
                <span className="logo__wh">
                    Proff
                </span>
                You
            </div>
            <div className="result_container">
                <div className="left_container">
                    <div className="profession">
                        {photo ? (
                            <img src={photo} alt="Снимок" className="photos" />
                        ) : (
                            <div className="photos" />
                        )}

                        <p className="your">Вы <span className="profess">DevOps</span>!</p>

                        <h3 className="text">На основе вашего фото и результатов пройденного теста, наш ИИ предположил,
                            что вы могли бы стать <span className="text_green">превосходным DevOps’ом</span>
                        </h3>

                    </div>

                    <button className="button_cool" onClick={handleEndClick}>
                        КРУТО!
                    </button>
                </div>
                <div className="qr"></div>
            </div>
        </div>
    )
}