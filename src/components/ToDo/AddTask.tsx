import InputText from "../UI/InputText";
import Button from "../UI/Button";
import {IToDoAddTask} from "../../typing/ToDo/todo"

export default function ToDoAddTask(props: IToDoAddTask) {
    const {handleChange, taskText} = props
    return (
        <div className="todo__add">
            <InputText
                placeholder="Добавьте задачу"
                className="todo__input"
                onChange={handleChange}
                text={taskText}
            />
            <Button
                ariaLabel="Добавить задачу"
                className="todo__btn-add"
            />
        </div>
    )
}
