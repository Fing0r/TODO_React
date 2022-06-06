import TaskItem from "./TaskItem";
import {ITodo} from "../../types/Todo/Todo"

export default function TodoList({taskList, setTaskList, priority}: ITodo) {
    const listItem = taskList
        .filter((item) => item.priority === priority)
        .map((item) => {
            return <TaskItem
                taskText={item.taskText}
                key={item.id}
                id={item.id}
                status={item.status}
                setTaskList={setTaskList}
            />
        })

    return (
        <ul className="todo__list">
            {listItem}
        </ul>
    )
}
