import {IButton} from "../../typing/UI/UI"

export default function Button(props: IButton) {
    const {className, label, ariaLabel, type, onClick} = props

    return (
        <button
            type={type || "submit"}
            className={className || "btn"}
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
