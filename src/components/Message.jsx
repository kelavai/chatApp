import { avatarImages } from "../library/avatar";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import "../styles/Messages.css"

export function Message(props) {
  const context = useContext(AppContext);
  
  const isCurrentUser = props.author === context.username;
  const messageClass = isCurrentUser ? "current-user" : "other-user";

  return (
    <div className={`message ${messageClass}`}>
      <img
        className="chat-avatar"
        src={avatarImages[props.avatarIndex]}
        alt={props.author}
        width={150}
        height={150}
      />
      <div className="message-author">{props.author}</div>
      <div className="message-text">{props.text}</div>
    </div>
  );
};
