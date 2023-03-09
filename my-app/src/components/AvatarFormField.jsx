import { useState } from "react";
import { FormField } from "./FormField";

const avatarImages = [
    'https://th.bing.com/th/id/R.183ae9281459e6b98004fc448618d18b?rik=3QinYzVFzyH2Tw&pid=ImgRaw&r=0',
    'https://skilline.co/wp-content/uploads/2020/05/1-768x776.jpg',
    'https://th.bing.com/th/id/OIP.BIV83qI1x4QF8fbfPwzPTwHaJP?pid=ImgDet&rs=1',
]

export function AvatarFormField(props) {
    const [index, setIndex] = useState(0)

    props.onChange(index);

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
            <img src={avatarImages[index]} alt="avatar" />
            <button type="button" onClick={next}>Next</button>
        </FormField>
    )
}