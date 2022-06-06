import TitleH2 from "../UI/TitleH2";
import TodoList from "./List";
import TodoForm from "./Form";
import {ITodo} from "../../types/Todo/Todo";

export default function Todos({priority, taskList, setTaskList}: ITodo) {

    return (
        <div>
            <TitleH2
                title={priority}
                className="todo__title"
            />
            <TodoForm
                taskList={taskList}
                setTaskList={setTaskList}
                priority={priority}
            />
            <TodoList
                taskList={taskList}
                setTaskList={setTaskList}
                priority={priority}
            />
        </div>
    )
}
