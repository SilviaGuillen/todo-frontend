import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {Todo} from "../todo.ts";
import {TodoCard} from "../components/TodoCard.tsx";
import axios from "axios";

export function TodoPag() {
    const [todo, setTodo] = useState<Todo>({
        id: "",
        description: "",
        status: ""
    });

    const params = useParams()

    useEffect(() => {
            axios
                .get("/api/todo/" + params.id)
                .then(response => {
                    setTodo(response.data)
                })
                .catch(reason => console.log(reason.message))
        },
        [params.id]
    )

    return (<>
        <TodoCard todo={todo} />
    </>)
}