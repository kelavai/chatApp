import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Message } from "../components/Message";
import { MessageForm } from "../components/MessageForm";
import { AppContext } from "../contexts/AppContext";
import "../styles/ChatPage.css";

export function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [client, setClient] = useState(null);
  const [chatRoom, setChatRoom] = useState(null);
  const [ready, setReady] = useState(false);
  const context = useContext(AppContext);
  const messageListRef = useRef(null);

  function handleSubmit(message) {
    client.publish({
      room: "algebra",
      message: message,
    });
  }

  function handleSignOut() {
    context.setUsername("");
  }

  const messageComponents = messages.map((message) => {
    return (
      <Message
        key={message.id}
        avatarIndex={message.author.avatarIndex}
        author={message.author.username}
        text={message.text}
      />
    );
  });

  function scrollToBottom() {
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  };

  useEffect(() => {
    const drone = new window.Scaledrone("Dm0wecDyuui01dBZ");
    console.log(drone);
    drone.on("open", (error) => {
      if (error) {
        console.log(error);
      } else {
        const room = drone.subscribe("algebra");
        console.log(room);

        setClient(drone);
        setChatRoom(room);
      }
    });
  }, []);

  useEffect(() => {
    if (chatRoom !== null && !ready) {
      chatRoom.on("data", (data) => {
        setMessages((messages) => {
          return [...messages, data];
        });
      });

      setReady(true);
    }
  }, [chatRoom, ready]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!context.isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="chat-page">
      <div className="message-list" ref={messageListRef}>
        {messageComponents}
      </div>
      <div className="user-input">
        <MessageForm
          onSubmit={handleSubmit}
          username={context.username}
          avatarIndex={context.avatarIndex}
        />
        <button type="button" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </div>
  );
};
