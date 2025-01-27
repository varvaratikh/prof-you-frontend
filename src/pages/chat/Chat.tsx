import {Back} from "../../images/Back";
import React from "react";
import {ChatForm} from "../../components/ChatForm/ChatForm";

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
            <ChatForm/>
        </div>
    )
}