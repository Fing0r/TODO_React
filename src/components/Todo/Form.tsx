import TodoAddTask from "./AddTask";
import ToDoAlert from "./Alert";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {ITodo} from "../../types/Todo/Todo";

export default function TodoForm({setTaskList, taskList}: ITodo) {
    const [taskText, setTaskText] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        setShowAlert(false);
    }, [taskText])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const task = e.target.value.trim();
        setTaskText(task);
    }

    const checkForDuplicate = () => {
        return taskList.some((item) => item.taskText === taskText);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const isNotValid = !taskText || checkForDuplicate();
        setShowAlert(checkForDuplicate);
        if (isNotValid) return;

        const task = {
            taskText,
            status: false,
            id: Date.now()
        }

        setTaskList((oldArray) => [...oldArray, task]);
        setTaskText("");
    }

    return (
        <form
            className="todo__info"
            onSubmit={handleSubmit}
        >
            <TodoAddTask
                taskText={taskText}
                handleChange={handleChange}
            />
            {showAlert && <ToDoAlert/>}
        </form>
    )
}

