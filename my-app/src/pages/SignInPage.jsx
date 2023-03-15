import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { getRandomName } from "../library/random";
import { FormField } from "../components/FormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { Button } from "../components/Button";
import { AvatarFormField } from "../components/AvatarFormField";


export function SignInPage(props) {
    const[ formState, setFormState ] = useState(getRandomName());
    const [avatar, setAvatar ] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit({
            username: formState,
            avatarIndex: avatar, 
        });
    }

    function handleUsernameChange(value) {
        setFormState(value);
    }

    console.log(formState);

    function handleAvatarChange(value) {
        setAvatar(value)
    }

    console.log(avatar)

    

    return (
        <div className="sign-in-page">
            <div className="card">
                    <AvatarFormField onChange={handleAvatarChange} />
                <form className="sign-in-form" onSubmit={handleSubmit}>
                    <InputFormField label="Username" type="text" onChange={handleUsernameChange} value={formState} />
                    <FormField>
                        <RandomNameButton onRandomName={handleUsernameChange} />
                    </FormField>
                    <FormField>
                        <Button type="submit" label="Sign In"/>
                    </FormField>
                    
                </form>
            </div>
        </div>
    );
};
