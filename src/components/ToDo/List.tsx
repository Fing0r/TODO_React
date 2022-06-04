import TaskItem from "./TaskItem";
import {IToDoList} from "../../typing/ToDo/todo"

export default function ToDoList(props: IToDoList) {
    const {priority, taskList, setTaskStorage} = props;

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
