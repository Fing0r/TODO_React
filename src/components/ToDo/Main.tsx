import ToDo from "./ToDo";
import "../../style/index.css"
import {useEffect, useState} from "react";
import {ITask} from "../../types/ToDo/todo"

function getTaskListFromStorage() {
    const jsonTaskList = localStorage.getItem("taskList") || '[]'
    return JSON.parse(jsonTaskList)
}
const taskStorage: ITask[]  = getTaskListFromStorage();

export default function ToDoMain() {
    const [taskList, setTaskList] = useState<ITask[]>(taskStorage);

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList])

    return (
        <div className="todo">
            <div className="todo__container">
                <ToDo
                    title="low"
                    priority="low"
                    taskList={taskList}
                    setTaskList={setTaskList}
                />
                <ToDo
                    title="high"
                    priority="high"
                    taskList={taskList}
                    setTaskList={setTaskList}
                />
            </div>
        </div>
    )
}
