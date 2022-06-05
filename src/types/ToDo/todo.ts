import {Dispatch, FormEvent, SetStateAction} from "react";

interface ITaskDefault {
    taskText: string,
    status: boolean,
    id: number,
}

export interface ITask extends ITaskDefault{
    priority: string,
}

export interface ITaskItem extends ITaskDefault{
    setTaskList: Dispatch<SetStateAction<ITask[]>>,
}

export interface IToDoAddTask {
    taskText: string,
    handleChange(e: FormEvent): void,
}

export interface IToDo {
    taskList: ITask[],
    priority: string
    setTaskList: Dispatch<SetStateAction<ITask[]>>,
}

export interface IToDoMain extends IToDo {
    title: string,
}
