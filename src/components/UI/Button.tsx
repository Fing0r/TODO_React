import {IButton} from "../../types/UI/UI"

export default function Button({className, label, ariaLabel, type, onClick}: IButton) {
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
