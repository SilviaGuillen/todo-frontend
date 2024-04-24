import {TodoStatusCard} from "../components/TodoStatusCard.tsx";
import {Todo} from "../todo.ts";


type SingleColumnPageParams = {
    status: string,
    todos: Todo[]
}

export function SingleColumnPage({status, todos}: SingleColumnPageParams): JSX.Element {
    return (<>
            <ul className="status-columns single-column-layout">
                <li className="status-column">
                    <TodoStatusCard status={status} todos={todos}/>
                </li>
            </ul>
        </>
    )
}