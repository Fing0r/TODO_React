import ToDoForm from "./Form";
import "../../style/index.css"
import {useEffect, useState} from "react";
import {ITask} from "../../typing/ToDo/todo"

function getTaskListFromStorage() {
    const jsonTaskList = localStorage.getItem("taskList") || '[]'
    return JSON.parse(jsonTaskList)
}
const taskList: ITask[]  = getTaskListFromStorage();

export default function ToDoMain() {
    const [taskStorage, setTaskStorage] = useState<ITask[]>(taskList);

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskStorage));
    }, [taskStorage])

    return (
        <div className="todo">
            <div className="todo__container">
                <ToDoForm
                    title="low"
                    priority="low"
                    storage={taskStorage}
                    setTaskStorage={setTaskStorage}
                />
                <ToDoForm
                    title="high"
                    priority="high"
                    storage={taskStorage}
                    setTaskStorage={setTaskStorage}
                />
            </div>
        </div>
    )
}
