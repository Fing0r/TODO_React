import TitleH2 from "../UI/TitleH2";
import ToDoList from "./List";
import ToDoForm from "./Form";
import {IToDo, IToDoMain} from "../../types/ToDo/todo";

export default function ToDo({title, taskList, setTaskList, priority}: IToDoMain) {
    return (
        <div>
            <TitleH2
                title={title}
                className="todo__title"
            />
            <ToDoForm
                taskList={taskList}
                setTaskList={setTaskList}
                priority={priority}
            />
            <ToDoList
                priority={priority}
                taskList={taskList}
                setTaskList={setTaskList}
            />
        </div>
    )
}
