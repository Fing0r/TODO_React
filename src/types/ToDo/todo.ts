import {Dispatch, FormEvent, SetStateAction} from "react";

export interface ITaskItem {
    taskText: string,
    status: boolean,
    setTaskStorage: Dispatch<SetStateAction<ITask[]>>,
    id: number
}

export interface ITask {
    taskText: string,
    priority: string,
    status: boolean,
    id: number
}

export interface IToDoAddTask {
    taskText: string,
    handleChange(e: FormEvent): void,
}

export interface IToDoForm {
    title: string,
    storage: ITask[],
    setTaskStorage: Dispatch<SetStateAction<ITask[]>>,
    priority: string
}

export interface IToDoList {
    priority: string,
    taskList: ITask[],
    setTaskStorage: Dispatch<SetStateAction<ITask[]>>,
}
