import { FormField } from "./FormField";
import "../styles/InputFormField.css";


export function InputFormField(props) {
  function handleChange(event) {
      props.onChange(event.target.value);
  }

  return(
    <FormField>
      <label>{props.label}</label>
      <input className="input-Form-Field" type={props.type} onChange={handleChange} value={props.value} placeholder={props.placeholder} />
    </FormField>
  );                  
};
