import TaskItem from "./TaskItem";
import {ITodo} from "../../types/Todo/Todo"

export default function TodoList({priority, taskList, setTaskList}: ITodo) {
    const listItem = taskList.map((item) => {
        if (item.priority !== priority) return null
        return <TaskItem
            taskText={item.taskText}
            key={item.id}
            id={item.id}
            status={item.status}
            setTaskList={setTaskList}
        />
    })

    return (
        <ul className="todo__list" data-list={priority}>
            {listItem}
        </ul>
    )
}
