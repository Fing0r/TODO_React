import Todos from "./Todos";
import "../../style/index.css"

export default function ToDoMain() {
    const PRIORITY = {
        LOW: "low",
        HIGH: "high"
    }

    return (
        <div className="todo">
            <div className="todo__container">
                <Todos priority={PRIORITY.LOW}/>
                <Todos priority={PRIORITY.HIGH}/>
            </div>
        </div>
    )
}
