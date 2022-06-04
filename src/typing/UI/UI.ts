import {ChangeEventHandler, FormEvent, MouseEventHandler} from "react";

export interface IInputText {
    placeholder: string
    className?: string
    text: string,
    onChange(e: FormEvent): void
}

export interface IToDoTitle {
    title: string,
    className?: string
}

export interface IButton {
    className?: string,
    label?: string,
    ariaLabel?: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: any,
}

export interface ICheckbox {
    checked: boolean,
    onChange: ChangeEventHandler<HTMLInputElement>
}
