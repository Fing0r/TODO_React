import TaskItem from "./TaskItem";
import React from "react";
import {IToDoList} from "../../typing/ToDo/todo"

export default function ToDoList(props: IToDoList) {
    const {priority, taskList, setTaskStorage} = props;

    const listItem = taskList.map((item) => {
        if (item.priority !== priority) return null
        return <TaskItem
            text={item.text}
            key={item.text}
            done={item.done}
            priority={item.priority}
            setTaskStorage={setTaskStorage}
        />
    })

    return (
        <ul className="todo__list" data-list={priority}>
            {listItem}
        </ul>
    )
}
