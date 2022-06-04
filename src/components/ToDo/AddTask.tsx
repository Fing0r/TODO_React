import InputText from "../UI/InputText";
import Button from "../UI/Button";
import {IToDoAddTask} from "../../types/ToDo/todo"

export default function ToDoAddTask({handleChange, taskText}: IToDoAddTask) {
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
