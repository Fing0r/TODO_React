import {ITask} from "./types/Todo/Todo";

const storageName = (priority: string) => `${priority}TaskList`;

export function getTaskListFromStorage(priority: string) {
    const TaskListJSON = localStorage.getItem(storageName(priority)) || '[]'
    return JSON.parse(TaskListJSON)
}

export function updateTaskListFromStorage(priority:string, taskList: ITask[]) {
    const TaskListJSON = JSON.stringify(taskList);
    localStorage.setItem(storageName(priority), TaskListJSON);
}
