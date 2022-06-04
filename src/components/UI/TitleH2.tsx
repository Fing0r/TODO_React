import {IToDoTitle} from "../../typing/UI/UI"

export default function TitleH2({title, className}: IToDoTitle) {
    return <h2 className={className || "title"}>{title}</h2>
}
