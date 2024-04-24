import {TodoCard} from "./TodoCard.tsx";
import {Todo} from "../todo.ts";
import '../assets/styles.css';
import {useEffect, useState} from "react";
import {statusToString} from "../status.ts";

type TodoStatusCardParams = {
    status: string,
    todos: Todo[]
}

type WrappedCardParams = {
    todo: Todo
}

export function TodoStatusCard({status, todos}: TodoStatusCardParams): JSX.Element {

    const [selectedTodos, setSelectedTodos] = useState<Todo[]>([])

    useEffect(() => {
            setSelectedTodos(todos.filter((todo: Todo) => todo.status === status))
        },
        [todos])

    return (<>
        <div className="status-column-card">
            <div className="status-column-head">
                <h2>{statusToString(status)}</h2>
            </div>
            <div className="status-column-body">

                <ul className="cards-list">
                    {selectedTodos.map((el: Todo) => {
                        return <WrappedCard key={el.id} todo={el}/>
                    })}
                </ul>
            </div>
        </div>
    </>)
}

function WrappedCard({todo}: WrappedCardParams): JSX.Element {
    return (<>
            <li key={todo.id}>
                <TodoCard key={todo.id} todo={todo}/>
            </li>
        </>
    )
}