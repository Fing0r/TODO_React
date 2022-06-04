import Button from "../UI/Button";
import Checkbox from "../UI/Checkbox";
import {ITaskItem} from "../../types/ToDo/todo"

export default function TaskItem({taskText, status, setTaskStorage, id}: ITaskItem) {
    const changeStatus = () => {
        setTaskStorage((actual) => actual.map((item) => {
                if (item.taskText === taskText) item.status = !status
                return item
            })
        )
    }

    const deleteTask = () => {
        setTaskStorage((actual) => actual.filter((item) => item.id !== id))
    }

    return (
        <li className={status ? "todo__task Done" : "todo__task"}>
            <Checkbox checked={status} onChange={changeStatus}/>
            <p className="todo__text">{taskText}</p>
            <Button
                onClick={deleteTask}
                className="todo__btn-close"
                type="button"
            />
            <button className="" type="button" data-btn="del"/>
        </li>
    )
}


