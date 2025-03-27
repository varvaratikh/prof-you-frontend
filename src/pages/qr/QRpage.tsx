import {useNavigate} from "react-router-dom";
import {usePhoto} from "../../context/PhotoContext";

import {Back} from "../../images/Back";
// @ts-ignore
import qr from '../../images/Qr.png';

import './qr.scss'
import {Button} from "../../components/button/Button";
import {PhotoResult} from "../../widgets/PhotoResult";
import {QRCode} from "../../widgets/QRCode";

export const QRpage = () => {
    const { photo, prediction } = usePhoto();
    const navigate = useNavigate();

    const handleEndClick = () => {
        navigate('/');
    };

    return (
        <div>
            <div className="image">
                <Back />
            </div>
            <div className="logo">
                <span className="logo__wh">Proff</span> You
            </div>
            <div className="result_container">
                <div className="left_container">
                    <PhotoResult photo={photo} prediction={prediction} />
                    <Button text="КРУТО!" onClick={handleEndClick} className="button_cool" />
                </div>
                <QRCode qrImage={qr} />
            </div>
        </div>
    );
};
