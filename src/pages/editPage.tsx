import {useEffect, useState} from "react";
import {Todo} from "../todo.ts";
import {useParams} from "react-router";
import axios from "axios";
import {TodoEditCard} from "../components/TodoEditCard.tsx";

export function EditPage(): JSX.Element {
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
        <TodoEditCard todo={todo} />
    </>)

}