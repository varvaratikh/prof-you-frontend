import {Back} from "../../images/Back";
import {useNavigate} from "react-router-dom";

import './qr.scss'

export const QRpage = () => {
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
                <div className="profession">
                </div>

                <button className="button_cool" onClick={handleEndClick}>
                    КРУТО!
                </button>

                <div className="qr">
                </div>
            </div>
        </div>
    )
}