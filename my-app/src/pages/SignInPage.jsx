import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitForm";

export function SignInPage(props) {
    const stateArray = useState('');
    const formState = stateArray[0];
    const setFormState = stateArray[1];
    //* const[ formState, setFormState ] = useState('');*//

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(formState)
    }

    function handleUsernameChange(value) {
        setFormState(value);
    }

    

    return (
        <div className="sign-in-page">
            <div className="card">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <InputFormField label="Username" type="text" onChange={handleUsernameChange}/>
                    <SubmitFormField />
                </form>
            </div>
        </div>
    );
};
