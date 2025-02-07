import {Back} from "../../images/Back";
import './qr.scss'

export const QRpage = () => {
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
                <div className="qr">

                </div>
            </div>
        </div>
    )
}