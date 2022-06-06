import {ITask} from "./types/Todo/Todo";

export function getTaskListFromStorage(storage: string) {
    const TaskListJSON = localStorage.getItem(storage) || '[]'
    return JSON.parse(TaskListJSON)
}

export function updateTaskListFromStorage(storage: string, taskList: ITask[]) {
    const TaskListJSON = JSON.stringify(taskList);
    localStorage.setItem(storage, TaskListJSON);
}
