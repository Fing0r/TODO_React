import {Dispatch, FormEvent, SetStateAction} from "react";

export interface ITask {
    taskText: string,
    status: boolean,
    id: number,
}

export interface ITaskItem extends ITask{
    setTaskList: Dispatch<SetStateAction<ITask[]>>,
}

export interface ITodoAddTask {
    taskText: string,
    handleChange(e: FormEvent): void,
}

export interface ITodo {
    taskList: ITask[],
    setTaskList: Dispatch<SetStateAction<ITask[]>>,
}

export interface ITodos {
    priority: string,
}
