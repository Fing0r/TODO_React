import TitleH2 from "../UI/TitleH2";
import ToDoList from "./List";
import ToDoAddTask from "./AddTask";
import {ChangeEvent, FormEvent, useState} from "react";
import {IToDoForm} from "../../typing/ToDo/todo"

export default function ToDoForm(props: IToDoForm) {
    const {title, storage, setTaskStorage} = props;

    const [taskText, setTaskText] = useState("");

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const task = e.target.value.trim();
        setTaskText(task);
    }

    function checkForDuplicate() {
        return storage.some((item) => item.text === taskText)
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const isNotValid = !taskText || checkForDuplicate();
        if (isNotValid) return;

        const task = {
            text: taskText,
            priority: title,
            done: false
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
            <ToDoList
                priority={title}
                taskList={storage}
                setTaskStorage={setTaskStorage}
            />
        </form>
    )
}
