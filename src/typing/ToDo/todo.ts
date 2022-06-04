import {Dispatch, FormEvent, SetStateAction} from "react";

export interface ITaskItem {
    text: string,
    priority: string,
    done: boolean,
    setTaskStorage: Dispatch<SetStateAction<ITask[]>>,
}

export interface ITask {
    text: string,
    priority: string,
    done: boolean
}

export interface IToDoAddTask {
    taskText: string,
    handleChange(e: FormEvent): void
}

export interface IToDoForm {
    title: string,
    storage: ITask[],
    setTaskStorage: Dispatch<SetStateAction<ITask[]>>,
}

export interface IToDoList {
    priority: string,
    taskList: ITask[],
    setTaskStorage: Dispatch<SetStateAction<ITask[]>>,
}
