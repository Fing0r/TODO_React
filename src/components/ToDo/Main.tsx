import ToDoForm from "./Form";
import "../../style/index.css"
import {useState} from "react";
import {ITask} from "../../typing/ToDo/todo"

export default function ToDoMain() {
    const [taskStorage, setTaskStorage] = useState<ITask[]>([]);

    return (
        <div className="todo">
            <div className="todo__container">
                <ToDoForm
                    title="low"
                    storage={taskStorage}
                    setTaskStorage={setTaskStorage}
                />
                <ToDoForm
                    title="high"
                    storage={taskStorage}
                    setTaskStorage={setTaskStorage}
                />
            </div>
        </div>
    )
}
