import {useNavigate} from "react-router-dom";
import {ChangeEvent, useEffect, useState} from "react";
import {Todo} from "../todo.ts";
import axios from "axios";
import StatusSelect from "./StatusSelect.tsx";

type EditCardParams = {
    todo: Todo,
}

export function TodoEditCard({todo}: EditCardParams) {
    const [description, setDescription] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
            setDescription(todo.description);
            setStatus(todo.status);
        }, [todo]
    )

    function handleDescriptionOnChange(event: ChangeEvent<HTMLInputElement>): void {
        setDescription(event.target.value);
    }

    function handleStatusOnChange(event: ChangeEvent<HTMLSelectElement>): void {
        setStatus(event.target.value);
    }

    function handleSaveButtonClick() {
        const newTodo = {
            id: todo.id,
            description: description,
            status: status
        }
        axios
            .put("/api/todo/" + todo.id + "/update", newTodo)
            .then(() => {
                navigate("/todo/" + todo.id)
            })
    }

    return (<>
        <div className="todo-edit-card">
            <h3>TodoEditCard</h3>
            <div>
                <label htmlFor={"description"}>Description: </label>
                <input id={"description"} name={"description"} type={"text"} value={description}
                       onChange={handleDescriptionOnChange}/>
            </div>
            <div>
                <label htmlFor={"status"}>Status: </label>
                <StatusSelect id={"status"} name={"status"} status={status} onChange={handleStatusOnChange}/>
            </div>
            <div>
                <button onClick={handleSaveButtonClick}>Save</button>
            </div>
        </div>
    </>)


}