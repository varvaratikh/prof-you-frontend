import './load.scss';
import {Back} from "assets/images/Back";
import {LoadCard} from "../../widgets/LoadCard";

export const Load = () => {
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
            <LoadCard />
        </div>
    )
}