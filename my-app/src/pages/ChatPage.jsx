import { InputFormField } from "../components/InputFormField";
import { Message } from "../components/Message";
import { SubmitFormField } from "../components/SubmitForm";

export function ChatPage() {
    return (
        <div>
            Chat Page
            <div className="message-list">
                <Message author="Ivan" text="Lorem ipsum" />
                <Message author="netko" text="Dolor sit amet" />
            </div>
            <form action="">
                <InputFormField />
                <SubmitFormField label="Send" />
            </form>
        </div>
    );
};