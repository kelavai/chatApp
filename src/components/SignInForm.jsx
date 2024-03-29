import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { FormField } from "../components/FormField";
import { RandomNameButton } from "../components/RandomNameButton";
import { Button } from "../components/Button";
import { AvatarFormField } from "../components/AvatarFormField";
import "../styles/SignInForm.css"


export function SignInForm(props) {

    const[ formState, setFormState ] = useState('');
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

    function handleAvatarChange(value) {
        setAvatar(value)
    }

    return ( 
        <form className="sign-in-form" onSubmit={handleSubmit}>
            <AvatarFormField onChange={handleAvatarChange} />    
            <InputFormField
                placeholder="Username"
                type="text" 
                onChange={handleUsernameChange} 
                value={formState} />
            <FormField>
                <RandomNameButton onRandomName={handleUsernameChange} />
            </FormField>
            <FormField>
                <Button type="submit" label="Sign In"/>
            </FormField>
        </form>
    );
}