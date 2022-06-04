import {IInputText} from "../../types/UI/UI"

export default function InputText({placeholder, className, text, onChange}: IInputText) {
    return(
        <label className="todo__label">
            <input
                className={className || "input"}
                placeholder={placeholder}
                type="text"
                value={text}
                onChange={onChange}
            />
        </label>
    )
}
