import TitleH2 from "../UI/TitleH2";
import TodoList from "./List";
import TodoForm from "./Form";
import {ITask, ITodos} from "../../types/Todo/Todo";
import {useEffect, useState} from "react";
import {getTaskListFromStorage, updateTaskListFromStorage} from "../../utils";

export default function Todos({priority}: ITodos) {
    const taskStorage: ITask[]  = getTaskListFromStorage(priority);
    const [taskList, setTaskList] = useState<ITask[]>(taskStorage);

    useEffect(() => {
        updateTaskListFromStorage(priority, taskList)
    }, [taskList])

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
                priority={priority}
                taskList={taskList}
                setTaskList={setTaskList}
            />
        </div>
    )
}
