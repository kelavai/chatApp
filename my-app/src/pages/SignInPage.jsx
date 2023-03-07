import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitForm";
import { RandomNameFormField } from "../components/RandomNameFormField";
import { getRandomName } from "../library/random";

export function SignInPage(props) {
    const[ formState, setFormState ] = useState(getRandomName());

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(formState)
    }

    function handleUsernameChange(value) {
        setFormState(value);
    }

    console.log(formState);

    

    return (
        <div className="sign-in-page">
            <div className="card">
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <InputFormField label="Username" type="text" onChange={handleUsernameChange} value={formState} />
                    <RandomNameFormField onRandomName={handleUsernameChange} />
                    <SubmitFormField label="Sign In" />
                </form>
            </div>
        </div>
    );
};
