import {ICheckbox} from "../../typing/UI/UI"

export default function Checkbox({checked, onChange}: ICheckbox ) {
    return (
        <label className="todo__checkbox">
            <input
                className="todo__field"
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span className="todo__content"/>
        </label>
    )
}
