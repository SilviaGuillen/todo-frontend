import {Todo} from "../todo.ts";
import {Link} from "react-router-dom";
import '../assets/styles.css';
import axios from "axios";
import {nextStatus} from "../status.ts";


type TodoCardParams = {
    todo: Todo,
}


export function TodoCard({todo}: TodoCardParams) {

    function handleProgressButtonClick() {
        if (todo.status === "OPEN" || todo.status === "IN_PROGRESS") {
            const newStatus = nextStatus(todo.status)
            if (newStatus) {
                const newTodo = {
                    id: todo.id,
                    description: todo.description,
                    status: newStatus
                }
                axios
                    .put("/api/todo/" + todo.id + "/update", newTodo)
                    .then(() => {
                    })
            }
        }
    }

    return (<>
        <div className="todo-card">
            <h3>TodoCard</h3>
            <p>Id is {todo.id}</p>
            <p>{todo.description}</p>
            <Link to={"/todo/" + todo.id}>Details</Link>
            <Link to={"/edit/" + todo.id}>Edit</Link>
            <button onClick={handleProgressButtonClick}>Progress</button>
        </div>
    </>)
}


