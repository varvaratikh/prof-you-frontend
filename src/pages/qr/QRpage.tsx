import {useNavigate} from "react-router-dom";
import {usePhoto} from "../../context/PhotoContext";

import {Back} from "../../images/Back";
// @ts-ignore
import qr from '../../images/Qr.png';

import './qr.scss'
import {Button} from "../../components/button/Button";

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

                    <Button text="КРУТО!" onClick={handleEndClick} className="button_cool" />
                </div>

                <div className="qr">
                    <img src={qr} alt="QR code" className="qr_photo"/>

                    <p className="scan">
                        <span className="scan_green">Сканируйте QR </span>
                        код, чтобы сохранить и поделиться результатом!
                    </p>
                </div>
            </div>
        </div>
    )
}