import Todos from "./Todos";
import "../../style/index.css"
import {ITask} from "../../types/Todo/Todo";
import {getTaskListFromStorage, updateTaskListFromStorage} from "../../utils";
import {useEffect, useState} from "react";

export default function ToDoMain() {
    const LOCAL_STORAGE = "TaskList";
    const PRIORITY = {
        LOW: "low",
        HIGH: "high"
    }

    const taskStorage: ITask[]  = getTaskListFromStorage(LOCAL_STORAGE);
    const [taskList, setTaskList] = useState<ITask[]>(taskStorage);

    useEffect(() => {
        updateTaskListFromStorage(LOCAL_STORAGE, taskList);
    }, [taskList])

    return (
        <div className="todo">
            <div className="todo__container">
                <Todos
                    priority={PRIORITY.LOW}
                    taskList={taskList}
                    setTaskList={setTaskList}
                />
                <Todos
                    priority={PRIORITY.HIGH}
                    taskList={taskList}
                    setTaskList={setTaskList}
                />
            </div>
        </div>
    )
}
