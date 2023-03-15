import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/Message";
import { SubmitFormField } from "../components/SubmitForm";

export function ChatPage(props) {
    const [formState, setFormState] = useState ('');
    const [messages, setMessages] = useState([]);

    function handleChange(message) {
        setFormState(message);
    }

    console.log(formState);

    function handleSubmit(event) {
        event.preventDefault();
        setFormState('');
        setMessages([...messages, {
            id: Date.now(),
            author: {
                username: props.username,
                avatarIndex: props.avatarIndex,
            },
            text: formState,
        }]);
    }

    const messageComponents = messages.map((message, props) => {
        return <Message 
        key={message.id} 
        avatarIndex={message.author.avatarIndex} 
        author={message.author.username} 
        text={message.text} 
    />;
});

    return (
        <div>
            Chat Page
            <div className="message-list">
                {messageComponents}
            </div>
            <form action="" onSubmit={handleSubmit}>
                <InputFormField label="message" type="text" value={formState} onChange={handleChange} />
                <SubmitFormField label="Send" />
            </form>
        </div>
    );
};