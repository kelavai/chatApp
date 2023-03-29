import "../styles/SubmitForm.css"
import { Button } from "../components/Button";

export function SubmitFormField(props) {
    return(
        <div className="submit-form-field">
                        <Button type="submit" label={props.label} />
                    </div>
    );
};