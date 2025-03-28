import {Back} from "assets/images/Back";
import { ChatForm } from "../../components/ChatForm/ChatForm";
import './chat.scss'

export const Chat = () => {

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
            <ChatForm />
        </div>
    )
}