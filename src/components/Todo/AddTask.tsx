import InputText from "../UI/InputText";
import Button from "../UI/Button";
import {ITodoAddTask} from "../../types/Todo/Todo"

export default function TodoAddTask({handleChange, taskText}: ITodoAddTask) {
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
