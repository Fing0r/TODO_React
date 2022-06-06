import {Dispatch, FormEvent, SetStateAction} from "react";

interface ITaskDefault {
    taskText: string,
    status: boolean,
    id: number,
}

export interface ITask extends ITaskDefault {
    priority: string;
}

export interface ITaskItem extends ITaskDefault{
    setTaskList: Dispatch<SetStateAction<ITask[]>>,
}

export interface ITodoAddTask {
    taskText: string,
    handleChange(e: FormEvent): void,
}

export interface ITodo {
    priority: string,
    taskList: ITask[],
    setTaskList: Dispatch<SetStateAction<ITask[]>>,
}

export interface ITodos {
    priority: string,
}
