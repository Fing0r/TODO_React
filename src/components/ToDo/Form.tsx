import TitleH2 from "../UI/TitleH2";
import ToDoList from "./List";
import ToDoAddTask from "./AddTask";
import ToDoAlert from "./Alert";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {IToDoForm} from "../../types/ToDo/todo";

export default function ToDoForm({title, storage, setTaskStorage, priority}: IToDoForm) {
    const [taskText, setTaskText] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        setShowAlert(false);
    },[taskText])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const task = e.target.value.trim();
        setTaskText(task);
    }

    const checkForDuplicate = () => {
        return storage.some((item) => item.taskText === taskText)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const isNotValid = !taskText || checkForDuplicate();
        setShowAlert(checkForDuplicate);
        if (isNotValid) return;

        const task = {
            taskText,
            priority,
            status: false,
            id: Date.now()
        }

        setTaskStorage((oldArray) => [...oldArray, task])
        setTaskText("");
    }

    return (
        <form
            className="todo__info todo__info--high"
            action="/"
            onSubmit={handleSubmit}>
            <TitleH2
                title={title}
                className="todo__title"
            />
            <ToDoAddTask
                taskText={taskText}
                handleChange={handleChange}
            />
            {showAlert ? <ToDoAlert/> : null}
            <ToDoList
                priority={priority}
                taskList={storage}
                setTaskStorage={setTaskStorage}
            />
        </form>
    )
}
