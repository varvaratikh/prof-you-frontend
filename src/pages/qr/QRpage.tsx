import {useNavigate} from "react-router-dom";
import {usePhoto} from "../../context/PhotoContext";

import {Back} from "assets/images/Back";
// @ts-ignore
import qr from 'assets/images/Qr.png';

import './qr.scss'
import {Button} from "../../components/button/Button";
import {PhotoResult} from "../../widgets/PhotoResult";

import { v4 as uuidv4 } from 'uuid';
import {StyledQRCode} from "../../widgets/StyledQRCode";
import {useEffect} from "react";

export const QRpage = () => {
    const { photo, prediction } = usePhoto();
    const navigate = useNavigate();

    const resultId = uuidv4();
    const baseUrl = window.location.origin;
    const qrLink = `${baseUrl}/result/${resultId}`;

    const handleEndClick = () => {
        navigate('/');
    };

    useEffect(() => {
        if (photo && prediction) {
            const result = { photo, prediction };
            localStorage.setItem(resultId, JSON.stringify(result));
        }
    }, [photo, prediction, resultId]);

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
                <StyledQRCode value={qrLink} />
            </div>
        </div>
    );
};
