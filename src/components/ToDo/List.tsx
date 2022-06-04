import TaskItem from "./TaskItem";
import {IToDoList} from "../../types/ToDo/todo"

export default function ToDoList({priority, taskList, setTaskStorage}: IToDoList) {
    const listItem = taskList.map((item) => {
        if (item.priority !== priority) return null
        return <TaskItem
            taskText={item.taskText}
            key={item.id}
            id={item.id}
            status={item.status}
            setTaskStorage={setTaskStorage}
        />
    })

    return (
        <ul className="todo__list" data-list={priority}>
            {listItem}
        </ul>
    )
}
