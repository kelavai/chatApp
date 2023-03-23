import { useState } from "react";
import { FormField } from "./FormField";
import { avatarImages } from "../library/avatar";
import "../styles/Avatar.css";
import { useEffect } from "react";



export function AvatarFormField(props) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        props.onChange(index);
    }, [index, props]);

     function next() {
        if(index >= avatarImages.length - 1){
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
     }

     function previous() {
         if(index <= 0) {
            setIndex(avatarImages.length - 1);
        } else {
            setIndex(index - 1);
        }
     }

    return (
        <FormField>
            <button type="button" onClick={previous}>Previous</button>
            <img className="avatar" src={avatarImages[index]} alt="avatar" />
            <button type="button" onClick={next}>Next</button>
        </FormField>
    )
}