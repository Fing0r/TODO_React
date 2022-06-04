import Button from "../UI/Button";
import Checkbox from "../UI/Checkbox";
import {ChangeEvent} from "react";
import {ITaskItem} from "../../typing/ToDo/todo"

export default function TaskItem(props: ITaskItem) {
    const {text, priority, done, setTaskStorage} = props

    function handleChangeStatus(e: ChangeEvent<HTMLInputElement>) {
        const checked = e.target.checked;

        setTaskStorage((actual) => actual.map((item) => {
                if (item.text === text) item.done = checked
                return item
            })
        )
    }

    function handleDeleteTask() {
        setTaskStorage((actual) => actual.filter((item) => item.text !== text))
    }

    return (
        <li className="todo__task" data-priority={priority}>
            <Checkbox checked={done} onChange={handleChangeStatus}/>
            <p className="todo__text">{text}</p>
            <Button
                onClick={handleDeleteTask}
                className="todo__btn-close"
                type="button"
            />
            <button className="" type="button" data-btn="del"/>
        </li>
    )
}


